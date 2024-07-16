var hour = 0;
        var minute = 0;
        var second = 0;
        var address; // Store the address to clear it later

        function updateDisplay() {
            document.getElementsByClassName("hours")[0].innerHTML = hour;
            document.getElementsByClassName("minutes")[0].innerHTML = minute;
            document.getElementsByClassName("seconds")[0].innerHTML = second;
        }     //to avoid repetative writing we use function

        function updateTime() {
            second++;
            if (second === 60) {
                minute++;
                second = 0;
            }
            if (minute === 60) {
                hour++;
                minute = 0;
            }
            updateDisplay();
        }

        function start() {
            if (!address) {           // Only start if it's not already running
                address = setInterval(updateTime, 1000);
            }
        }

        function stop() {
            clearInterval(address);
            address = null; // Reset address to allow restarting
        }

        function reset() {
            clearInterval(address);
            address = null; // Reset address to allow restarting
            hour = 0;
            minute = 0;
            second = 0;
            updateDisplay();
            // str();   //if we want to strt from frst when reset is clicked
        }













// var hour = 0;
// var minute = 0;
// var second = 0;


// function str(){
//    ++second;
//     var a = document.getElementsByClassName("hours")[0].innerHTML = hour;
//     var b = document.getElementsByClassName("minutes")[0].innerHTML = minute;
//     var c = document.getElementsByClassName("seconds")[0].innerHTML = second;
//     if(second == 60){
//         minute++;
//         second=0;
//     }
//     else if(minute == 60){
//         hour++;
//         minute= 0;
//     }
// }
// var addr = setInterval(str,1000)



// function sto(){
//     var a = document.getElementsByClassName("hours")[0].innerHTML = hour;
//     var b = document.getElementsByClassName("minutes")[0].innerHTML = minute;
//     var c = document.getElementsByClassName("seconds")[0].innerHTML = second;
//     clearInterval(addr);
//      hour = 0;
//     minute = 0;
//     second = 0;
//     // str();
// }
 
