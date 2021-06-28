let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}
function diminuir() {
    video.playbackRate -= 0.1;
}

function aumentar() {
    video.playbackRate += 1;
}
function pause() {
    video.pause();

}

function play() {
    video.play();
}
function stop() {
    video.pause();
    video.currentTime = 0;

}

