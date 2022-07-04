"use strict";

const paneElems = document.querySelectorAll('.pane')
paneElems.forEach((item) => {
   item.style.position = 'relative'
   item.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>')
})

const buttonElems = document.querySelectorAll('.remove-button')
buttonElems.forEach((item) => {
   item.style.position = 'absolute'
})

paneElems.forEach((item) => {
   item.firstChild.onclick = () => item.remove()
})