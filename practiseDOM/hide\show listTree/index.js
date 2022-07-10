'use strict'

for(let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span')
    li.prepend(span)
    span.append(span.nextSibling)
}

tree.addEventListener('click', hideList) 

function hideList(event) {
    if(event.target.tagName !== 'SPAN') return
    
    let liChild = event.target.parentNode.querySelector('ul')

    if(!liChild) return

    liChild.hidden = !liChild.hidden
}