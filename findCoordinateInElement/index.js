"use strict";

document.onclick = function(e) { // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
  };

  const cordField = field.getBoundingClientRect()
  const topBorder = field.clientTop
  const leftBorder = field.clientLeft
  const fullWidhtField = field.offsetWidth
  const fullHeightField = field.offsetHeight
  const clientWidthField = field.clientWidth
  const clientHeightField = field.clientHeight
  const rightBorder = fullWidhtField - clientWidthField - leftBorder
  const bottomBorder = fullHeightField - clientHeightField - topBorder

  const upOuterCord = `${cordField.left}:${cordField.top}`
  console.log(upOuterCord)

  const downOuterCord = `${cordField.right}:${cordField.bottom}`
  console.log(downOuterCord)

  const upInnerCord = `${cordField.left + leftBorder}:${cordField.top + topBorder}`
  console.log(upInnerCord)

  const downInnerCord = `${cordField.right - rightBorder}:${cordField.bottom - bottomBorder}`
  console.log(downInnerCord)