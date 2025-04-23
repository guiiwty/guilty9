
const audio = document.getElementById("background-music");
const icon = document.getElementById("volume-icon");
const slider = document.getElementById("volume-slider");

let isFirstClick = true;

function toggleMute() {
    if (isFirstClick) {
      audio.play();
      isFirstClick = false;
    }

    audio.muted = !audio.muted;

    if (audio.muted) {
      icon.classList.remove("fa-volume-up");
      icon.classList.add("fa-volume-mute");
    } else {
      icon.classList.remove("fa-volume-mute");
      icon.classList.add("fa-volume-up");
    }
  }

  function setVolume(value) {
    audio.volume = value;
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
