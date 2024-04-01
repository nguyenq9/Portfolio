const top_button = document.getElementById("top_button")
const sound_icon = document.getElementById("sound_icon")
const audio = document.querySelector('audio');
let sound_toggled = true;
audio.volume = 0.3;

top_button.addEventListener('click', function() {
    const audio = document.querySelector('audio'); // Get the audio element
    if (!sound_toggled) {
        sound_icon.src = "images/sound/sound-on.png";
        console.log('sound is on');
        audio.volume = 0.3
        sound_toggled = true;
    } else {
        sound_icon.src = "images/sound/sound-off.png";
        console.log('sound is off');
        audio.volume = 0; 
        sound_toggled = false;
    }
});
