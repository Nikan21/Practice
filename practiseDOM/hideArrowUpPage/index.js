'use strict'

arrowTop.addEventListener('click', clickArrow)

function clickArrow(event) {
  window.scrollTo(0, 0)
}

window.addEventListener('scroll', scrollPage)

function scrollPage(event) {
  const html = document.documentElement
  arrowTop.hidden = (window.innerHeight + html.scrollTop < window.innerHeight * 2)
} 
