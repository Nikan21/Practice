"use strict";

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.calculate = function(str) {
    const string = str.split(' '),
     a = +string[0],
     op = string[1],
     b = +string[2]

    if (isNaN(a) || isNaN(b) || !this.methods[op]) return NaN

    return this.methods[op](a, b)
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func
  }
}

const calc = new Calculator();
calc.addMethod('*', (a, b) => a * b)

console.log(calc.calculate("2 * 3"));
