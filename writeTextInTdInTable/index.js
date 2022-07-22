'use strict'

const table = document.getElementById('bagua-table');
let area 
table.addEventListener('click', clickOnTD)

function clickOnTD(event) {
  const td = event.target.closest('td')
  if(area) return
  if(td) area = true
  if(!td) return
  if(!this.contains(td)) return

  const cordTD = td.getBoundingClientRect()
  const styleTD = getComputedStyle(td)
  const paddingTD = parseInt(styleTD.padding)
  const textarea = document.createElement('textarea')

  textarea.className = 'area'
  textarea.innerHTML = td.innerHTML
  textarea.style.resize = 'none'
  textarea.style.left = cordTD.left + 'px'
  textarea.style.top = cordTD.top + 'px'
  textarea.style.height = cordTD.bottom - cordTD.top - paddingTD * 2 + 'px'

  td.replaceWith(textarea)
  textarea.focus()

  const buttonWrapper = document.createElement('div')
  const buttonOK = document.createElement('button')
  const buttonCancel = document.createElement('button')

  buttonWrapper.style.position = 'absolute'
  buttonOK.className = 'Ok'
  buttonOK.textContent = 'OK'
  buttonCancel.className = 'Cancel'
  buttonCancel.textContent = 'CANCEL'

  textarea.after(buttonWrapper)
  buttonWrapper.append(buttonOK, buttonCancel)

  buttonWrapper.addEventListener('click', function(event) {
    if (event.target.closest('.Ok')) {
      td.innerHTML = textarea.value
    }
    
    textarea.replaceWith(td)
    buttonWrapper.style.display = 'none'
    area = false
  })
}