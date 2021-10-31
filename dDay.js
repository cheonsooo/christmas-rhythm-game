const clock=document.querySelector("h2#clock");
const dDay=new Date("2021,12,25");


function getClock(){
    const date=new Date();
    const totalDay=dDay.getTime()-date.getTime();

    const c_Day=String(Math.floor(totalDay)).padStart(3,"0");
    const result=Math.ceil(c_Day/(1000*60*60*24));
    const c_Hours=String(Math.floor(24-date.getHours()-1)).padStart(2,"0");
    const c_Minutes=String(Math.floor(60-date.getMinutes())).padStart(2,"0");
    const c_seconds=String(Math.floor(60-date.getSeconds())).padStart(2,"0");
    clock.innerText=`${result}d${c_Hours}h${c_Minutes}m${c_seconds}s`;
}
getClock();
setInterval(getClock,1000);