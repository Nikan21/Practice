'use strict'

function isVisible(elem) {
  const html = document.documentElement
  const img = elem.getBoundingClientRect()
  console.log(img.top)
  console.log(window.innerHeight + html.scrollTop)


  if(img.top < window.innerHeight) {
    return true
  }
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();
