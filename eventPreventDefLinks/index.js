"use strict";

contents.addEventListener('click', askLeave)

function askLeave(event) {
    const a = event.target.closest('a')
    if(!a) return
    
    const result = confirm('Leave page?')
    if(!result) {
        event.preventDefault()
    }
}
