'use strict'

let liElements =  document.querySelectorAll('li')

for(let li of liElements) {
    console.log(li.firstChild.textContent)
}

console.log(liElements.length)
