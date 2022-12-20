function Clock() {
    var timer;
    function render() {
        var today = new Date(Date.now());

        var newYear = new Date();
        newYear.setFullYear(newYear.getFullYear()+1);newYear.setMonth(0);newYear.setDate(1);newYear.setHours(0, 0, 0);

        var diff = newYear.getTime()-today.getTime();

        var days = Math.trunc(diff/1000/60/60/24);

        var hours = Math.trunc(diff/1000/60/60%24);

        var minutes = Math.trunc(diff/1000/60%60);

        var seconds = Math.trunc(diff/1000%60);

        output = `Time until newYear: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`
        head.innerHTML = output;

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