"use strict";

house.addEventListener('mouseover', mouseOver)
house.addEventListener('mouseout', mouseOut)

let tooltip 
let test
function mouseOver(event) {
    const currentElement = event.target.closest('[data-tooltip]')
    if(!currentElement) return

     test = setTimeout(() => {
        tooltip = showTooltip(currentElement, currentElement.dataset.tooltip) 
    }, 1000)
    
}

function mouseOut(event) {
    if (test) {
        clearInterval(test)
        tooltip.remove()
    }
} 

function showTooltip(elem, htmlElem) {
    const clue = document.createElement('div')
    clue.className = 'tooltip'
    clue.innerHTML = htmlElem
    document.body.append(clue)

    let coords = elem.getBoundingClientRect()

    let top = coords.top - clue.offsetHeight - 5
    if(top < 0) {
        top = coords.top + elem.offsetHeight + 5
    }

    let left = coords.left + (elem.offsetWidth - clue.offsetWidth) / 2
    if(left < 0) {
        left = 0
    }

    clue.style.top = top + "px";
    clue.style.left = left + "px";

    return clue
}
