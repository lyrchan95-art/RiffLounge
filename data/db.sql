

-- Verify the data was inserted
--SELECT * FROM tracks;

--INSERT INTO tracks (title, audio_url, image_url, duration, bpm, tags, prompt_used) 
    --VALUES 
    --('Rise Up Lights', '/audio/Rise Up Lights.mp3', '/images/cover1.jpg', 180, 85, '["inspirational", "uplifting", "electronic"]', 'uplifting lofi electronic with inspiring melodies'),

    --('Sunshine in Hong Kong', '/audio/Sunshine in Hong Kong.mp3', '/images/cover2.jpg', 195, 82, '["asian", "city", "warm", "nostalgic"]', 'asian-inspired lofi with city ambiance and warm melodies'),

    --('My Turn Now', '/audio/My Turn Now.mp3', '/images/cover3.jpg', 170, 88, '["confident", "focused", "determined"]', 'confident lofi beats with determined vibe'),

    --('The Waiting Place', '/audio/The Waiting Place.mp3', '/images/cover4.jpg', 210, 78, '["calm", "patient", "meditative", "peaceful"]', 'calm meditative lofi for waiting and patience');


--Update Rise Up Lights with description
   UPDATE tracks  SET prompt_used = 'driving synths ;soaring instrumental riff ;future rave pulsing bass energetic buildup' WHERE title = 'Rise Up Lights';

    Update Sunshine in Hong Kong with description  
    UPDATE tracks SET prompt_used = 'rock and roll; rock pop; alternative pop' WHERE title = 'Sunshine in Hong Kong';