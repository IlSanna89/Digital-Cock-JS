function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;

    $("#clock").html(time);
}

function showDate() {
    var today = new Date();
    var day = today.getUTCDate();
    var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var year = today.getFullYear();

    if(day < 10) {
        day = "0" + day;
    }
   
    var data = day + "/" + month[today.getMonth()] + "/" + year;

    $("#date").html(data);
}

function showDayLetter() {
    var today = new Date();
    var day = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
    var dayLetter = day[today.getDay()]; 
    $("#day").html(dayLetter);
}

showDayLetter();
showTime();
showDate();

setInterval(function() {
    showTime();
}, 1000);

