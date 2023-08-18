


var settime = document.getElementById("settime");
var setdate = document.getElementById("setdate");

function updateDate(){
    var date = new Date();
    
    settime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    setdate.innerHTML =date.getDate()+"-"+parseInt(date.getMonth()+1) + " - " + date. getFullYear();  
}

setInterval(updateDate,1000);
onload = updateDate();

function getColor(){
var getColor = document.getElementById("setcolor").value;
localStorage.setItem("Color",getColor);
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background =localStorage.getItem("Color");
}
function setColor(){
document.getElementById("setcolor").value = localStorage.getItem("Color");
document.getElementById("time").style.background =localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");

}


