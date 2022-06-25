'use strict'

function debounce(func, delay) {
let isCollDown = false

    return function() {
        if(isCollDown) return
        func.apply(this, arguments)
        isCollDown = true
        setTimeout( () => isCollDown = false, delay)
    }
}

let f = debounce(alert, 1000);

f(1);
f(2); 

setTimeout( () => f(3), 100); 
setTimeout( () => f(4), 1100); 
setTimeout( () => f(5), 1500);