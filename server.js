const express = require('express');
const path = require('path');
const { getAllTracks } = require('./server/database');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));  // Audio and images
app.use(express.static(__dirname)); // HTML files

// API endpoint to get tracks
app.get('/api/tracks', (req, res) => {
    getAllTracks((err, tracks) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(tracks);
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});