'use strict'

const parse = (expr) =>{
const reg = /^\s?(-?\d+(?:\.\d+)?)\s?([-+*/])\s?(-?\d+(?:\.\d+)?)\s?$/
const result = expr.match(reg)

if(!result) return []
result.shift()
return result
}

const [a, op, b] = parse("1.2 * 3.4");
console.log(a)
console.log(op)
console.log(b)