"use strict";

let clue;
const heightBetween = 5;
document.addEventListener("mouseover", showClue);
document.addEventListener("mouseout", hideClue);

function showClue(event) {
  const elemTool = event.target;
  let text = elemTool.dataset.tooltip;
  if (!text) return;

  clue = document.createElement("div");
  clue.className = "tooltip";
  clue.innerHTML = `${text}`;
  document.body.append(clue);

  const cordTool = elemTool.getBoundingClientRect();

  let top = cordTool.top - clue.offsetHeight - heightBetween;
  if (top < 0) {
    top = cordTool.top + elemTool.offsetHeight + heightBetween;
  }

  let left = cordTool.left + (elemTool.offsetWidth - clue.offsetWidth) / 2;
  if (left < 0) left = 0;

  clue.style.top = top + "px";
  clue.style.left = left + "px";
}

function hideClue(event) {
  if (!event.target.dataset.tooltip) return;
  clue.remove();
}
