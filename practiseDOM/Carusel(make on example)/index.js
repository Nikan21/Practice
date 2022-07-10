'use strict'

const width = 130
const count = 3
let position = 0
const left = document.querySelector('.prev')
const right = document.querySelector('.next')
const list = document.querySelector('ul')
const listElems = document.querySelectorAll('li')

//Add animation scroll
list.style.transition = 'marginLeft 250ms'
list.style.transition = 'transform 250ms'


//2 methods with marginLeft and transform

function moveLeft() {
  position += width * count
  position = Math.min(position, 0)
  /* list.style.marginLeft = position + 'px' */
  list.style.transform = `translateX(${position}px)`
}

left.addEventListener('click', moveLeft)

function moveRight() {
  position -= width * count
  position = Math.max(position, -width * (listElems.length - count))
/*   list.style.marginLeft = position + 'px' */
  list.style.transform = `translateX(${position}px)`
}

right.addEventListener('click', moveRight)