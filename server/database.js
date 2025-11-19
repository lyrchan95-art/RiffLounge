const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'lofi_music.db');

const fs = require('fs');
if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.run(`CREATE TABLE IF NOT EXISTS tracks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        audio_url TEXT NOT NULL,
        image_url TEXT,
        duration INTEGER,
        bpm INTEGER,
        tags TEXT,
        prompt_used TEXT,
        date_created DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Tracks table ready');
        }
    });
}

function insertTrack(track, callback) {
    const sql = `INSERT INTO tracks (title, audio_url, image_url, duration, bpm, tags, prompt_used) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(sql, [
        track.title,
        track.audio_url,
        track.image_url,
        track.duration,
        track.bpm,
        JSON.stringify(track.tags),
        track.prompt_used
    ], function(err) {
        callback(err, this.lastID);
    });
}

function getAllTracks(callback) {
    db.all("SELECT * FROM tracks ORDER BY date_created DESC", [], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            const tracks = rows.map(row => ({
                ...row,
                tags: JSON.parse(row.tags)
            }));
            callback(null, tracks);
        }
    });
}

module.exports = {
    db,
    insertTrack,
    getAllTracks
};