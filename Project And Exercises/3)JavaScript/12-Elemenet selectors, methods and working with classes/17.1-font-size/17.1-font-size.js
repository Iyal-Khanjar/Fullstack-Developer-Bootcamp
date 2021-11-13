const btnIncrease = document.querySelector('.increase'),
    btnDecrease = document.querySelector('.decrease'),
    text = document.querySelector('.text')

btnIncrease.addEventListener('click', increaseBtn)
btnDecrease.addEventListener('click', decreaseBtn)

let size = 30
function increaseBtn() {
    if (size < 100){
        size++;  
    } 
    text.style.fontSize = size + 'px'
    console.log(size);
}

function decreaseBtn() {
    if (size > 6) {
        size--;
    }
    text.style.fontSize = size + 'px'
    console.log(size);
}

