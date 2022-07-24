"use strict";

function showCover() {
    const coverDiv = document.createElement('div')
    coverDiv.id = 'cover-div'
    document.body.style.overflowY = 'hidden'
    document.body.append(coverDiv)
}

function hideCover() {
    document.getElementById('cover-div').remove()
    document.body.style.overflowY = '' 
}

function showPrompt(text, callback) {
    showCover()
    const form = document.getElementById('prompt-form')
    const container = document.getElementById('prompt-form-container')
    document.getElementById('prompt-message').innerHTML = text
    form.text.value = ''

    function complete(value) {
        hideCover()
        container.style.display = 'none'
        document.onkeydown = null
        callback(value)
    }

    form.onsubmit = function() {
        let value = form.text.value
        if(value === '') return false

        complete(value)
        return false
    }

    form.cancel.onclick = function() {
        complete(null)
    }

    document.onkeydown = function(event) {
        if(event.key === 'Escape') {
            complete(null)
        }
    }

    const firstElem = form.elements[0]
    const lastElem = form.elements[form.elements.length - 1]
    
    firstElem.onkeydown = function(event) {
        if (event.key === 'Tab' && event.shiftKey) {
            lastElem.focus()
            return false
        }
    }

    lastElem.onkeydown = function(event) {
        if (event.key === 'Tab' && !event.shiftKey) {
            firstElem.focus()
            return false
        }
    }

    container.style.display = 'block'
    form.elements.text.focus()
}

document.getElementById('show-button').onclick = function() {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert("Вы ввели: " + value);
})
}