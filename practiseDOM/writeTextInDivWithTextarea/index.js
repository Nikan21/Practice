'use strict'

view.addEventListener('click', clickOnDiv)

function clickOnDiv(event) {
  view.style.display = 'none'
  edit.style.display = 'block'
  edit.classList = 'edit'
  edit.focus()
  edit.addEventListener('keydown', function(event) {
    if(event.code === 'Enter'){
      edit.blur()
    }
  })
}

edit.addEventListener('blur', blurArea) 

function blurArea(event) {
  view.textContent = `${event.target.value}`
  view.style.display = 'block'
  edit.style.display = 'none'
}