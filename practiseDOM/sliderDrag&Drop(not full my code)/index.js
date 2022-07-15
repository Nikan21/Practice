"use strict";

const thumb = document.querySelector(".thumb");

thumb.addEventListener("mousedown", thumbDrag);

function thumbDrag(event) {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener("mousemove", moveDrag);
  document.addEventListener("mouseup", dropDrag);

  function moveDrag(event) {
    let left = event.clientX - shiftX - slider.getBoundingClientRect().left;
    if (left < 0) {
      left = 0;
    }
    let rhight = slider.offsetWidth - thumb.offsetWidth;
    if (left > rhight) {
      left = rhight;
    }

    thumb.style.left = left + "px";
  }

  function dropDrag(event) {
    document.removeEventListener("mousemove", moveDrag);
    document.removeEventListener("mouseup", dropDrag);
  }
}

thumb.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
