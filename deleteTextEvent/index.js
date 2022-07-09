'use strict'

container.addEventListener('click', closeMessage)

function closeMessage(event) {
    let closeElem = event.target.closest('.pane')
    if(!closeElem) return
    if(!container.contains(closeElem)) return
    closeElem.remove()
}