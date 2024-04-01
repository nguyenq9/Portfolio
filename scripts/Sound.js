const top_button = document.getElementById("top_button");
const sound_icon = document.getElementById("sound_icon");
const audio = document.querySelector('audio');
let sound_toggled = true;

audio.volume = 0.3;

// Check if the audio is loaded and playing
function isSoundPlaying() {
    return !audio.paused && audio.currentTime > 0;
}

// Function to toggle sound
function toggleSound() {
    if (!sound_toggled) {
        sound_icon.src = "images/sound/sound-on.png";
        console.log('sound is on');
        audio.volume = 0.3;
        if (!isSoundPlaying()) {
            audio.play().catch(error => {
                // Autoplay was prevented, handle this scenario
                console.error('Autoplay was prevented:', error.message);
            });
        }
        sound_toggled = true;
    } else {
        sound_icon.src = "images/sound/sound-off.png";
        console.log('sound is off');
        audio.volume = 0;
        audio.pause();
        sound_toggled = false;
    }
}

top_button.addEventListener('click', toggleSound);

// Add event listener to play audio when interaction occurs
document.addEventListener('click', function() {
    // Check if sound is toggled on and audio is not playing
    if (sound_toggled && !isSoundPlaying()) {
        audio.play().catch(error => {
            // Autoplay was prevented, handle this scenario
            console.error('Autoplay was prevented:', error.message);
        });
    }
});
