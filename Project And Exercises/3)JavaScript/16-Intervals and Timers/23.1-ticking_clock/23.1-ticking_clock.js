const clock = document.querySelector('.clock')
setInterval(() => {
    const date = new Date();
    clock.innerHTML = "the time is " + getTime(date);
})

function getTime(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}