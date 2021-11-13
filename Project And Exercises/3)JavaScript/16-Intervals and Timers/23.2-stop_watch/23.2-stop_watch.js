const clock = document.querySelector('.clock'),
    start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    reset = document.querySelector('.reset');

clock.innerHTML = '00:00:00';//ms: s : m
let time = 0,clockInterval;

function startClock() {
    clockInterval =setInterval(() => {
        time++
        let ms= time%1000;//1500 => 500
        let s = parseInt((((time-(time %1000))/1000)%60).toString())
        let m = parseInt((((time-(time %1000))/1000)/60).toString())
        clock.innerHTML = `m: ${m}  s: ${s} ms:${ms}`;
    }, 1)
}


function stopClock() {
    clearInterval(clockInterval)
}
function resetClock(){
    stopClock()
    time=0;
    clock.innerHTML = '00:00:00';//ms: s : m
}

start.addEventListener('click', startClock)
stop.addEventListener('click',stopClock)
reset.addEventListener('click',resetClock)