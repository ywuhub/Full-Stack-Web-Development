const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// fetch the current local hour, minute and second
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// degrees of the hands on the clock
let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

function runClock() {
    // to keep smooth animation we set clock hands ourselves
    // manually set the degrees to the clock hands
    hrPosition = hrPosition + 3/360;
    minPosition = minPosition + 6/60;
    secPosition = secPosition + 6;

    // rotate the hands corresponding to the respective hr/min/sec
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// keep the clock ticking every second
var interval = setInterval(runClock, 1000);