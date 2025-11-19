const { getAllTracks } = require('./database');

console.log('Testing database connection...');

getAllTracks((err, tracks) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log(`✅ Found ${tracks.length} tracks in database:`);
        tracks.forEach(track => {
            console.log(` - ${track.title} (${track.bpm} BPM)`);
        });
    }
});