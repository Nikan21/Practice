'use strict'

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    prop *= -1
    return Reflect.get(target, prop, receiver)
  }
});
console.log( array)
console.log( array[-1] ); // 3
console.log( array[-2] ); // 2