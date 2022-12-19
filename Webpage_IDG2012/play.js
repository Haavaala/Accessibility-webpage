//javascript for the play/pause, stop, forward and backwards functions
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
const player = document.querySelector(".video, .audio");
const volume = document.querySelector(".volume");

//javascript for the play/pause button functionality
playPauseBtn.onclick = () => {
if (player.paused) {
    player.play();
    playPauseBtn.textContent = "Pause";
} else {
    player.pause();
    playPauseBtn.textContent = "Play";
}
};

//javascript for the stop/start over button functionality
stopBtn.onclick = () => {
player.pause();
player.currentTime = 0;
playPauseBtn.textContent = "Play";
};

//backwards button functionality
rwdBtn.onclick = () => {
player.currentTime -= 3;
};

//forward button functionality
fwdBtn.onclick = () => {
player.currentTime += 3;
if (player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
}
};

//timer functionality
player.ontimeupdate = () => {
const minutes = Math.floor(player.currentTime / 60);
const seconds = Math.floor(player.currentTime - minutes * 60);
const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
const secondValue = seconds < 10 ? `0${seconds}` : seconds;

const mediaTime = `${minuteValue}:${secondValue}`;
timeLabel.textContent = mediaTime;
};

console.log(volume);

volume.addEventListener("change", (e) =>{
    player.volume = e.currentTarget.value / 100;
})