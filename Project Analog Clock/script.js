const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// degrees of the hands on the clock
let hrPosition;
let minPosition;
let secPosition;

// fetch the current hour, minute and second
var date = new Date();
console.log(date);

// rotate the hands corresponding to the respective hr/min/sec
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
