const colockContainer = document.querySelector(".js-clock"),
clockTitle = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // ? is if , : is else

};

function init(){
    getTime();
    setInterval(getTime, 1000); //real time
};

init();