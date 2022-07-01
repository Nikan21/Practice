"use strict";

const button = document.querySelector('button')
button.onclick = () => {
    text.style.display = 'none'
}

function hideYourself() {
    button.hidden = true
}

button.addEventListener('click', hideYourself)