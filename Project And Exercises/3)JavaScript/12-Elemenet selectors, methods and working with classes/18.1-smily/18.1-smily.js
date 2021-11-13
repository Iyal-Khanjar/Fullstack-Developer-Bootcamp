const btn=document.querySelector("#btn")
const text=document.querySelector("#number")
const p=document.querySelector("#numOfImg")

function numberOfImg(){
btn.value='hey'
for(let i=1; i<=text.value;i++){
   
   p.innerHTML += '<img src="./img/smiley.png" alt="my_image"></img>'
}
}
btn.addEventListener('click',numberOfImg)
