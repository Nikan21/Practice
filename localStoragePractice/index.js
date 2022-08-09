"use strict";

const changeData = (event) => {
    localStorage.setItem('data', event.data)
}

area.addEventListener('input', changeData)

area.value = localStorage.getItem('data') 

button.onclick = (event) => {
    area.value = ''
    localStorage.removeItem('data')
}