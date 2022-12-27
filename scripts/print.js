
/* Script that makes letters print out one by one */
/* Скрипт, печатающий буковки одну за другой */

function print(destination, message, speed){
    var i = 0;
    stop = false;
    ID = document.getElementById(destination);
    /* Interval is put on 'window' for the sole purpose of making it stop from another script */
    /* Вешаем интервал на окно, чтобы его можно было останавливать из любого другого скрипта */
    window.printInterval = setInterval(function(){
        ID.innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(window.printInterval);
            printInterval = null;
        }
    }, speed);
}
