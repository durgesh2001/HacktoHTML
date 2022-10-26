const hourEl =document.getElementById("hour")
const minuteEl =document.getElementById("minute")
const secondEl =document.getElementById("second")
const ampmEl =document.getElementById("ampm")

function updateclock(){
let   h = new Date().getHours()
let m = new Date().getMinutes()
let s =new Date().getSeconds()
let ampm = "AM";
if(h>12){
    h=h-12
    ampm = "PM";
}
h = h < 9 ? "0"+ h : h;
m = m < 9 ? "0"+ m : m ;
s = s < 9 ? "0"+ s : s ;


hourEl.innerText = h;
minuteEl.innerText = m
secondEl.innerText = s
ampmEl.innerText = ampm

setTimeout(()=>{
updateclock()
},1000)
}
updateclock()
