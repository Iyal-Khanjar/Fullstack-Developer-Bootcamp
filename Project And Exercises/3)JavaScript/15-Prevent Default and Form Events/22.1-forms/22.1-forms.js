const btn = document.querySelector('input[type="button"]'),
    btn2 = document.querySelector('#btn2'),
    btn3 = document.querySelector('#btn3'),
    yourName = document.querySelector('input[type="text"]'),
    yourAge = document.querySelector('input[type="number"]'),
    yourEmail = document.querySelector('input[type="email"]'),
    p = document.querySelector('p')

btn2.style.visibility = "hidden"
btn3.style.visibility = "hidden"

function form() {
    p.innerHTML = `Your name is ${yourName.value} you are ${yourAge.value} and your email address is ${yourEmail.value} do you confirm?`
    btn.style.visibility = "hidden"
    btn2.style.visibility = "visible"
    btn3.style.visibility = "visible"
    btn2.addEventListener('click', () => {
            alert('Confrimed')
    })
    btn3.addEventListener('click', () => {
        yourName.value=''
        yourAge.value=''
        yourEmail.value=''
        p.innerHTML=''
        btn.style.visibility = "visible"
    btn2.style.visibility = "hidden"
    btn3.style.visibility = "hidden"
})
}




btn.addEventListener('click', form)


