/* Script that tell you the time until the new year (well, duh) */
/* Скрипт, который отвечает за сообщение времени до нового года (сверху страницы) */

function Clock() {
    var timer;
    function render() {
        var today = new Date(Date.now());

        var newYear = new Date();
        /* New Year depends on the current year (+1) */
        /* "Новый год" зависит от текущего года */
        newYear.setFullYear(newYear.getFullYear()+1);newYear.setMonth(0);newYear.setDate(1);newYear.setHours(0, 0, 0);
        /* Calculating difference in time (in ms) */
        /* Смотрим разницу во времени (в миллисекундах) */
        var diff = newYear.getTime()-today.getTime();
        /* Не знаю, как это объяснить, но тут мы вычисляем дни, часы, минуты и секунды */
        var days = Math.trunc(diff/1000/60/60/24);
        var hours = Math.trunc(diff/1000/60/60%24);
        var minutes = Math.trunc(diff/1000/60%60);
        var seconds = Math.trunc(diff/1000%60);

        output = `Time until newYear: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
        statusBar.innerHTML = output;
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };

}

function startClock() {
    clock = new Clock();
    clock.start();
}
