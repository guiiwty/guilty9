const audio = document.getElementById("background-music");
const volumeSlider = document.getElementById("volume-slider");
const volumeIcon   = document.getElementById("volume-icon");

function setVolume(val) {
  audio.muted = false;
  audio.volume = val;
  updateIcon();
}

function toggleMute() {
  const audio = document.getElementById("background-music");
  const icon = document.getElementById("volume-icon");

  audio.muted = !audio.muted;

  if (audio.muted) {
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-mute");
  } else {
    icon.classList.remove("fa-volume-mute");
    icon.classList.add("fa-volume-up");
  }
}

function updateIcon() {
  if (audio.muted || audio.volume == 0) {
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-mute");
  } else {
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.add("fa-volume-up");
  }
}

document.body.addEventListener('click', function () {
  audio.play();
}, { once: true });
