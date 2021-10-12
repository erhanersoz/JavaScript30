const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const togglePlayPauseButton = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

function togglePlayPause(){
    const method = video.paused ? "play" : "pause";
    video[method]();
    updateButton();
}

function updateButton(){
    const icon = video.paused ? "►" : "❚❚";
    togglePlayPauseButton.textContent = icon;
}

function updateProgressBar(){
    const percent = (video.currentTime / video.duration) * 100 ;
    progressBar.style.flexBasis = `${percent}%`;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlayPause);
togglePlayPauseButton.addEventListener("click", togglePlayPause);

video.addEventListener("timeupdate", updateProgressBar);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(renge => {
    renge.addEventListener("change", handleRangeUpdate)
    renge.addEventListener("mousemove", handleRangeUpdate)
});

let changeProgress = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => changeProgress && scrub(e));
progress.addEventListener("mousedown", () => changeProgress = true);
progress.addEventListener("mouseup", () => changeProgress = false);