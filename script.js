const timer = document.getElementById("timer");
const audio=document.getElementById("alarm");

let myInterval;
let currentTime=prompt("Enter Time to start!");

function printTimeLeft(){
    timer.innerText=currentTime--;
    if(currentTime<0){
        clearInterval(myInterval);
        audio.play();
        setInterval(()=>{
            audio.pause();
        }, 4000);
    }
}


myInterval=setInterval(printTimeLeft, 1000);