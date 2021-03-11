function digitalClock(s) {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); },
        time = parseFloat(s).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),
        milliseconds = time.slice(-3);
    if (hours > 23) {
        let midnight = hours % 24
        return pad(midnight, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
    } else {
        return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
    }
}
console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))