const h1 = document.querySelector('.title'),
    p1 = document.querySelector('.p1'),
    p2 = document.querySelector('.p2'),
    text = document.querySelector('#text'),
    text2 = document.querySelector('#text2'),
    mail1 = document.querySelector('#mail'),
    txt = document.querySelector('.txt'),
    txt2 = document.querySelector('.txt2'),
    mail2 = document.querySelector('.mail2'),
    img = document.querySelector('.center'),
    btn1 = document.querySelector('#btn1'),
    btn2 = document.querySelector('#btn2')


function all() {
h1.innerHTML='Hello my name is Iyal'
p1.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda quam a doloribus totamaliquid deleniti debitis sapiente pariatur. At vel, recusandae ducimus cum eligendi consectetur perferendisdelectus corporis officia harum doloribus qui est corrupti maiores ratione animi iure beatae illo quidem erroraliquam possimus, sint vero. Sint, consequuntur quo.'
p2.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda quam a doloribus totamaliquid deleniti debitis sapiente pariatur. At vel, recusandae ducimus cum eligendi consectetur perferendisdelectus corporis officia harum doloribus qui est corrupti maiores ratione animi iure beatae illo quidem erroraliquam possimus, sint vero. Sint, consequuntur quo.'
text.value='Iyal'
text2.value='Khanjar'
mail1.value='ayalkhanjar@gmail.com'
txt.innerHTML='Name'
txt2.innerHTML='Family name'
mail2.innerHTML='Mail'
img.innerHTML='<img id="img" src="https://source.unsplash.com/random" style="width: 500px; height: 500px;" alt=""></img>'
}
function deleteAll() {
    h1.innerHTML=''
    p1.innerHTML=''
    p2.innerHTML=''
    text.value=''
    text2.value=''
    mail1.value=''
    txt.innerHTML='Name'
    txt2.innerHTML='Family name'
    mail2.innerHTML='Mail'
    img.innerHTML=''
    }

btn1.addEventListener('click', all)
btn2.addEventListener('click', deleteAll)