const timer = document.getElementById("timer");


let myInterval;
let currentTime=10;

function printTimeLeft(){
    timer.innerText=currentTime--;
    if(currentTime<0){
        clearInterval(myInterval);
    }
}


myInterval=setInterval(printTimeLeft, 1000);