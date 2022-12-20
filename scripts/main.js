window.onload = init;

function init() {
    const goBack = document.getElementById("back");
    const goAuto = document.getElementById("auto");
    const goForward = document.getElementById("forward");
    const mask = document.getElementById('mask');
    const level = document.getElementById('level');
    const msg = document.getElementById('msg');
    const head = document.getElementById("head");
    const oneDay = 1000*60*60*24;
    goBack.addEventListener('click', back);
    goAuto.addEventListener('click', auto);
    goForward.addEventListener('click', forward);
    updateScene();
    startClock();
}