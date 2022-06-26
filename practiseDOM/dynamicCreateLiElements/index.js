"use strict";

const ulElem = document.createElement('ul')
document.body.append(ulElem)

while(true) {
    let userText = prompt('Write youre text', '')
    if(!userText) break
    let liElem = document.createElement('li')
    liElem.textContent = userText
    ulElem.append(liElem)
}