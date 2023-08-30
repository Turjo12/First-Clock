function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minuts = today.getMinutes();
    var seconds = today.getSeconds();

// set the  time period <am / pm>
hours = hours > 12 ? hours % 12 : hours ; 

if(hours < 10){
  hours = "0" + hours;
  
}
if(minuts < 10){
  minuts = "0" + minuts;

}
if(seconds < 10){
  seconds = "0" + seconds;

}

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".Minute").innerHTML = minuts;
  document.querySelector(".seconds").innerHTML = seconds;
}
var updateclock = setInterval(clock, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"})
const monthName = today.toLocaleString("default", {weekday: "short"})
document.querySelector(".month-name").innerHTML = monthName
document.querySelector(".day-name").innerHTML = dayName
document.querySelector(".day-number").innerHTML = dayNumber
document.querySelector(".year").innerHTML = year