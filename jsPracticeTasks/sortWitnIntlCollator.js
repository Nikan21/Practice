'use strict'
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

const sort = new Intl.Collator()

animals.sort((a, b) => {
return sort.compare(a, b)})

console.log(animals)