const changeLi = document.querySelector('.start-here'),
   changeTitle = document.querySelector('title'),
   changeP = document.querySelector('p'),
   addLi = document.querySelector('ul ul'),
   remove = document.querySelector('ul')



changeLi.innerHTML = 'main title'
changeTitle.innerHTML = 'Master Of The Dom'
changeP.innerHTML = 'hello I think I understand how to change innerHTML'
remove.removeChild(remove.lastElementChild);
addLi.innerHTML += '<li>sub title 4</li>'
