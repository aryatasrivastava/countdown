const timer = document.getElementById("timer");
const audio=document.getElementById("alarm");
const inner=document.getElementsByClassName("inner");
let myInterval;
let currentTime=prompt("Enter Time to start!");
timer.innerText=currentTime;

function printTimeLeft(){
    if(currentTime <0 ){
        clearInterval(myInterval);
        return false;
    }
    timer.innerText=currentTime--;

    if(currentTime<3){
        inner[0].style.background="red";
    }
    if(currentTime<0){
        clearInterval(myInterval);
        audio.play();
        setInterval(()=>{
            audio.pause();
        }, 4000);
    }
}


myInterval=setInterval(printTimeLeft, 1000);