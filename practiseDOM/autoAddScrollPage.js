'use strict'

window.addEventListener('scroll', scrollPage)

function scrollPage(event) {
  const html = document.documentElement
  
  if(window.innerHeight + html.scrollTop >= html.offsetHeight) {
    html.style.height = html.offsetHeight + 100 + 'px'
  }
} 