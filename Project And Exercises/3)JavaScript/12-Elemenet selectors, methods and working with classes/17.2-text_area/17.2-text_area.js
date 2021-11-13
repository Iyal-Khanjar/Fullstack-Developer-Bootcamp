const btn = document.querySelector('input'),
text = document.querySelector('textarea'),
warning= document.querySelector('.warning')

btn.addEventListener('click',check)
function check() {
    if(text.value.length<100){
        warning.innerHTML='You need at least 100 characters'
    }
    else if(text.value.length>=100)
    warning.innerHTML=''
}