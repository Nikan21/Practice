"use strict";

function getFullCoord(elem) {
    const cord = elem.getBoundingClientRect()
    return {
        top: cord.top + window.scrollY,
        right: cord.right + window.scrollX,
        bottom: cord.bottom + window.scrollY,
        left: cord.left + window.scrollX
    }
}

function positionAt(anchor, position, elem) {
    const cordAncor = getFullCoord(anchor)
    elem.style.position = 'absolute'
    if(position === 'top') {
        elem.style.top = cordAncor.top + 'px'
        elem.style.left = cordAncor.left + 'px'
    }
    else if(position === 'right') {
        elem.style.top = cordAncor.top + 'px'
        elem.style.left = cordAncor.right + 'px'
    }else if (position === 'bottom') {
        elem.style.top = cordAncor.bottom + 'px'
        elem.style.left = cordAncor.left + 'px'
    }else{
        throw new Error('Wrong position')
    }
  }

  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");