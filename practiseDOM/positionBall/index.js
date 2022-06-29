"use strict";


const widthBall = ball.clientWidth
const heightBall = ball.clientHeight

const left1 = (field.clientWidth / 2) - (widthBall / 2)
const top1 = (field.clientHeight / 2) - (heightBall / 2)

console.log(left1)
console.log(top1)

ball.style.top = top1 + 'px' 
ball.style.left = left1 + 'px'