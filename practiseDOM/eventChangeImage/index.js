"use strict";

const changeImage = (event) => {
    const a = event.target.closest('a')
    if(!a) return

    event.preventDefault()
    
    const src = a.getAttribute('href')
    largeImg.setAttribute('src', src)
}

thumbs.addEventListener('click', changeImage)
