const btn = document.querySelector("#hh")
const inputs = document.querySelector("input")
const h4 = document.querySelector("h4")
// btn.value='hey'
function check(){
    if(inputs.value>=18){
        h4.innerHTML='you can drink appear'
    }
    else if(inputs.value<18){
        h4.innerHTML='you’re too young'
    }
}
btn.addEventListener('click',check)
