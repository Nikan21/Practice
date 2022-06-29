"use strict";

//Length scrollBottom
const elem = document.querySelector('.scroll')

function start() {
    elem.scrollTop += 50
    console.log(elem.scrollTop)
    console.log(elem.scrollHeight - elem.scrollTop - elem.clientHeight)
}

//Widght scroll
const cssElem = getComputedStyle(elem)
const widthScroll = elem.offsetWidth - elem.clientWidth

