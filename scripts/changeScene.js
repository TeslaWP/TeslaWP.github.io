
/* Скрипт, отвечающий за смену сцены, персонажа и текста. */

var isAuto = false;
var scene = 1;
var maxScenes = 8;
var delay = 7000;
var interval;
var buttonUpdate;
var j = 0;

function updateScene() {
    if (scene==maxScenes) {
        stopEverything();
    }

    /* "scene" variable limiter. From 1 to 8 only. */
    if (scene == null) {
        stopEverything();
    } else if (scene>maxScenes) {
        scene = 1;
    } else if (scene<=0) {
        scene = maxScenes;
    }

    switch (scene) {
        case 1:
            DonJuan();
            print("msg", "And who do we have here? Oh, you don't know who you are..? Maybe we should leave it that way.", 50);
            /* Кого это к нам занесло? О, ты не знаешь себя ..? Возможно, мы должны оставить это как есть. */
            break;
        case 2:
            Richard();
            print("msg", "But I know you. Look at my face. We've met before... Haven't we?", 50);
            /* Но я знаю тебя. Посмотри на моё лицо. Мы встречались раньше ... Не так ли? */
            break;
        case 3:
            Rasmus();
            print("msg", "I don't know you! Why are you here? You're no guest of mine!", 50);
            /* Я тебя не знаю! Почему ты здесь? Ты не мой гость! */
            break;
        case 4:
            DonJuan();
            print("msg", "Do you really want me to reveal who you are? Knowing oneself means acknowledging ones actions.", 50);
            /* Ты действительно хочешь, чтобы я сказала кто ты? Принятие себя означает принятие своих поступков. */
            break;
        case 5:
            DonJuan();
            print("msg", "As of lately you've done some terrible things...", 50);
            /* В последнее время ты делал ужасные вещи... */
            break;
        case 6:
            Richard();
            print("msg", "You don't remember me? I'll give you a clue... Does April the 3rd mean anything to you?", 50);
            /* Ты не помнишь меня? Я дам тебе подсказку ... Третье апреля тебе о чём-нибудь говорит? */
            break;
        case 7:
            Richard();
            print("msg", "I believe that was the day of our first encounter. You look like you might be remembering something...", 50);
            isAuto = false;
            /* Думаю, это был день нашей первой встречи. Выглядишь будто вспоминаешь... */
            break;
        case 8:
            Rasmus();
            print("msg", "By the way, it's been "+window.daysSinceRelease+" days since the game released.", 50);
            /* Кстати, с момента релиза игры прошло VAR дней. */
            break;
    }

    sauce = "./images/" + maskName + "Light.webp";
    mask.src = sauce;
};

/* Go forward/back. Achieved by adding/subtracting of "scene" variable. */

function forward() {
    scene++;
    msg.innerHTML = "";
    clearInterval(window.printInterval);
    updateScene();
};

function forwardClick() {
    stopEverything();
    forward();
}

function back() {
    scene--;
    msg.innerHTML = "";
    clearInterval(window.printInterval);
    updateScene();
};

function backClick() {
    stopEverything();
    back();
}

/* Automated scene change */

function autoUpdate() {
    isAuto = !isAuto;
    if (isAuto==false) {
        clearInterval(interval);
        clearInterval(buttonUpdate);
        auto.innerHTML = "auto";
        return;
    }

    clearInterval(interval);
    clearInterval(buttonUpdate);

    interval = setInterval(function(){
        forward();
        j = 0;
    }, delay);

    buttonUpdate = setInterval(function(){
        j++;
        auto.innerHTML = (delay/1000)-j;
    }, 1000);
}

/* Separate functions for each character and its scene. */

function DonJuan() {
    maskName = "DonJuan";
    level.src = "images/level1.png";
    msg.style.textShadow = "0.15vw 0.15vw aquamarine";
}

function Richard() {
    maskName = "Richard";
    level.src = "images/level2.png";
    msg.style.textShadow = "0.15vw 0.15vw gold";
}

function Rasmus() {
    maskName = "Rasmus";
    level.src = "images/level3.png";
    msg.style.textShadow = "0.15vw 0.15vw mediumVioletRed";
}

function stopEverything() {
    isAuto = false;
    clearInterval(interval);
    clearInterval(buttonUpdate);
    j = 0;
    auto.innerHTML = "auto";
}