
// Abertura da página as letras surgindo

function typeWriter(el){
    const titleText = el.innerHTML.split("")
    el.innerHTML = ''
    titleText.forEach(function(letter,i){

        setTimeout(function(){
            el.innerHTML += letter
        }, 170*i)
    });
}
    
const phrase = document.querySelector('.title')
typeWriter(phrase)

   const daysEl = document.getElementById("days");
   const hoursEl = document.getElementById("hours");
   const minutesEl = document.getElementById("minutes");
   const secondsEl = document.getElementById("seconds");

   const NewYears = "3 Jun 2023";

function countdown(){

   const NewYearsDate = new Date(NewYears);
   const currentDate = new Date();

   const totalSeconds = (NewYearsDate - currentDate) / 1000;

   const days = Math.floor(totalSeconds/ 3600 / 24);
   const hours = Math.floor(totalSeconds / 3600) % 24;
   const minutes = Math.floor(totalSeconds / 60) % 60;
   const seconds = Math.floor(totalSeconds) % 60;

   daysEl.innerHTML = days;
   hoursEl.innerHTML = formatTime(hours);
   minutesEl.innerHTML = formatTime(minutes);
   secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

