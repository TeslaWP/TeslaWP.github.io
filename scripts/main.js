window.onload = init;

function init() {
    const goBack = document.getElementById("back");
    const goAuto = document.getElementById("auto");
    const goForward = document.getElementById("forward");
    const mask = document.getElementById('mask');
    const level = document.getElementById('level');
    const msg = document.getElementById('msg');
    const statusBar = document.getElementById("statusBar");
    const oneDay = 1000*60*60*24;
    goBack.addEventListener('click', backClick);
    goAuto.addEventListener('click', autoUpdate);
    goForward.addEventListener('click', forwardClick);
    updateScene();
    startClock();
}