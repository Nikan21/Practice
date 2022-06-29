"use strict";

function showNotification(option) {
    const {top, right, html, className} = option
    
    const divElement = document.createElement('div')
    divElement.className = 'notification'
    document.body.append(divElement)

    if (className) {
        divElement.classList.add(className) 
    }

    divElement.style.top = top + 'px' 
    divElement.style.right = right + 'px' 
    divElement.innerHTML = html

    setInterval(() => {divElement.style.display = 'none'}, 1500)
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
  });
