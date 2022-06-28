"use strict";

const calendar = document.querySelector('.calendar')

function createCalendar(elem, year, month) {
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  const table = document.createElement('table');

  //Шапка таблицы
  const thead = document.createElement('thead')
  table.append(thead)
  const trHead = document.createElement('tr')
  thead.append(trHead)

  for(let i = 0; i < days.length; i++) {
    let th = document.createElement('th')
    th.innerHTML = days[i]
    trHead.append(th)
  }

  //Основа таблицы
  const date = new Date(`${year}-${month}`)
  const day = date.getDay()
  const userMonth = date.getMonth()
  let firstDate = date.getDate()
  const lastDayMont = date.getDate(date.setMonth(month), date.setDate(0))
  let rows

  //Проверка на количество строк для календаря
  if (userMonth === 1 && day === 1 && lastDayMont === 28){
    rows = 4
  } else if ((day === 7 && (lastDayMont === 30 || lastDayMont === 31)) || (day === 6 && lastDayMont === 31) ) {
    rows = 6
  } else {
    rows = 5
  }

  const tbody = document.createElement('tbody')
  table.append(tbody)

  for(let i = 1; i <= rows; i++) {
    let tr = document.createElement('tr')
    
    tbody.append(tr)
    
    for(let j = 1; j <= 7; j++) {
      if (firstDate > lastDayMont) break

      let td = document.createElement('td')

      tr.append(td)

      if(i === 1 && j < day) continue

      td.innerHTML = firstDate
      firstDate++
    }
  }

  elem.append(table)
}

createCalendar(calendar, 2012, 2)