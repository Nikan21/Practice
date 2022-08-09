"use strict";

const clickOnImg = (event) => {
    let endAnimation = false

    const img = event.target
    img.style.width = '400px'
    img.style.height = '240px'

    const animationEnd = (event) => {
            if(endAnimation) return
        endAnimation = true
            alert('Amination is finished')
    }
    
    flyjet.addEventListener('transitionend', animationEnd)
}

flyjet.addEventListener('click', clickOnImg)
