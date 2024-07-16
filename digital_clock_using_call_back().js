function digital(){
    var c = new Date();
    document.getElementsByClassName("hours")[0].innerHTML = c.getHours() + ":";
    document.getElementsByClassName("minutes")[0].innerHTML = c.getMinutes() + ":";
    document.getElementsByClassName("seconds")[0].innerHTML = c.getSeconds();
    if (c.getSeconds() == 40){
        clearInterval(timer);
    }
}
var timer = setInterval(digital,1000);