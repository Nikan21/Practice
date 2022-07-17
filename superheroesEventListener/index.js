"use strict";

document.addEventListener("mousedown", mouseDown);

function mouseDown(event) {
  event.preventDefault();

  const dragElem = event.target.closest(".draggable");
  if (!dragElem) return;

  let cordElem = dragElem.getBoundingClientRect();
  const styleHrml = getComputedStyle(document.documentElement)
  const htmlBottom = parseInt(styleHrml.height)

  let shiftX = event.clientX - cordElem.left;
  let shiftY = event.clientY - cordElem.top;
  let rightShiftX = cordElem.right - event.clientX;
  let bottomShiftY = cordElem.bottom - event.clientY

  let left = event.pageX - shiftX;
  let top = event.pageY - shiftY;

  dragElem.style.left = left + "px";
  dragElem.style.top = top + "px";

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);

  dragElem.style.position = "absolute";
  dragElem.style.zIndex = 1000;
  document.body.append(dragElem);

  function mouseMove(event) {
    let cordHtml = document.documentElement.getBoundingClientRect();
    let cordElem = dragElem.getBoundingClientRect();

    let left = event.pageX - shiftX;
    let top = event.pageY - shiftY;
    let right = event.pageX + rightShiftX;
    let bottom = event.pageY + bottomShiftY

    if (left < cordHtml.left) {
      left = 0;
    }

    if (top < cordHtml.top) {
      top = 0;
    }

    if (top < window.scrollY) {
      top = window.scrollY
      window.scrollBy(0, -10)
    }

    if (right > cordHtml.right) {
      left = cordHtml.right - cordElem.width;
    }

    if(bottom > htmlBottom) {
      top = htmlBottom - cordElem.height
    }

    if(bottom > window.innerHeight + window.scrollY) {
      top = window.innerHeight + window.scrollY - cordElem.height
      window.scrollBy(0, 10)
    }

    dragElem.style.left = left + "px";
    dragElem.style.top = top + "px";
  }

  function mouseUp(event) {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
}

document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
