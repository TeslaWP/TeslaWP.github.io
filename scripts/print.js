
/* Скрипт */

function print(destination, message, speed){
    var i = 0;
    stop = false;
    ID = document.getElementById(destination);
    window.printInterval = setInterval(function(){
        ID.innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(window.printInterval);
            printInterval = null;
        }
    }, speed);
}
