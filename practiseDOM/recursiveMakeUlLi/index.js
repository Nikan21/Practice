"use strict";

const container = document.getElementById('container');

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

//First option 
function createTree(container, data) {
  container.innerHTML = makeTree(data)
}

function makeTree(data) {
  let li = ''
  let ul

  for(let key in data) {
    li += '<li>' + key + makeTree(data[key])+ '</li>'
  }

  if(li) {
    ul = '<ul>' + li + '</ul>'
  }

  return ul || ''
}

//Second option 
function createTree(container, data) {
  container.append(makeTree(data))
}

function makeTree(data) {
  let ul = document.createElement('ul')
  
  if (!Object.keys(data).length) return
  
  for(let key in data) {
    let li = document.createElement('li')
    li.innerHTML = key

    let childrenUl = makeTree(data[key])
    
    if(childrenUl) li.append(childrenUl)

    ul.append(li)
  }
  
  return ul 
}

createTree(container, data);

