const daysEl = document.querySelector(".js-daysEl");
const hoursEl = document.querySelector(".js-hoursEl");
const minsEl = document.querySelector(".js-minsEl");
const secondEl = document.querySelector(".js-secondEl");

const newYears = "1 Jan 2022";
const counter = ()=>{

const newYears = "1 Jan 2022";
const newYearDate = new Date(newYears);
const currentDate = new Date();


const totalSeconds = (newYearDate - currentDate) / 1000;


const days = Math.floor(totalSeconds / 3600 / 24);
const hours= Math.floor(totalSeconds / 3600 )% 24;
const mins = Math.floor(totalSeconds / 60) % 24;
const seconds = Math.floor(totalSeconds) % 60;


daysEl.innerHTML = days;
hoursEl.innerHTML = timeFormat(hours);
minsEl.innerHTML = timeFormat(mins);
secondEl.innerHTML = timeFormat(seconds);


}

const timeFormat = (time) =>{
    return time < 10 ? `0${time}` : time;
};

setInterval(counter, 1000);

