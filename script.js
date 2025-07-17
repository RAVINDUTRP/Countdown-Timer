const newYear = "1 Jan 2026";

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    // console.log(newYearDate);
    // console.log(currentDate);

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // console.log(days, hours, minutes, seconds);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = timeFormat(hours);
    document.getElementById('minutes').innerHTML = timeFormat(minutes);
    document.getElementById('seconds').innerHTML = timeFormat(seconds);    

}

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

