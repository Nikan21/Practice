"use strict";

const liElements = document.querySelectorAll('li')

for (let elem of liElements) {
  let count = elem.querySelectorAll('li').length
  if (!count) continue
  elem.firstChild.data += `[${count}]`
}