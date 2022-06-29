"use strict";

function getFullCoord(elem) {
  const cord = elem.getBoundingClientRect();
  return {
    top: cord.top + window.scrollY,
    right: cord.right + window.scrollX,
    bottom: cord.bottom + window.scrollY,
    left: cord.left + window.scrollX,
  };
}

function positionAt(anchor, position, elem) {
  const cordAncor = getFullCoord(anchor);
  elem.style.position = "absolute";

  switch (position) {
    case "top-out":
      elem.style.top = cordAncor.top - elem.clientHeight + "px";
      elem.style.left = cordAncor.left + "px";
      break;
    case "right-out":
      elem.style.top = cordAncor.top + "px";
      elem.style.left = cordAncor.right + "px";
      break;
    case "bottom-out":
      elem.style.top = cordAncor.bottom + "px";
      elem.style.left = cordAncor.left + "px";
      break;
    case "top-in":
      elem.style.top = cordAncor.top + "px";
      elem.style.left = cordAncor.left + "px";
      break;
    case "right-in":
      elem.style.top = cordAncor.top + "px";
      elem.style.left = cordAncor.right - elem.clientWidth + "px";
      break;
    case "bottom-in":
        elem.style.top = cordAncor.bottom - elem.clientHeight + "px";
        elem.style.left = cordAncor.left + "px";
      break;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");
