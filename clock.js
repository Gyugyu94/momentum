const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const Minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}`: hours}:${
        Minutes< 10 ? `0${Minutes}`:Minutes}:${
        seconds<10 ? `0${seconds}`:seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();