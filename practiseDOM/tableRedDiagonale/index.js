'use strict'

let table = document.body.firstElementChild

for(let i = 0; i < table.rows.length; i++) {
    let rows = table.rows[i]
    rows.cells[i].style.backgroundColor = 'red'
}