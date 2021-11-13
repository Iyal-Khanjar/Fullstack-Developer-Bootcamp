const check = document.querySelector('input[type="checkbox"]'),
    Img = document.querySelector('.img')

Img.style.display = "none"
check.addEventListener('click', () => {
    if (check.checked)
        Img.style.display = "unset";

    else
        Img.style.display = "none"
})

