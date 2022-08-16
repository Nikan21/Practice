'use strict'

const str = 'Завтрак в 09:00 в комнате 123:456'
console.log(str.match(/\b\d\d:\d\d\b/gu))

const str1 = 'Завтрак в 09:00. Ужин в 21-30'
console.log(str1.match(/\b\d\d[-:]\d\d\b/g))

const str2 = "Привет!... Как дела?....."
console.log(str2.match(/\.{3,}/g))

const str3 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
console.log(str3.match(/#\p{Hex_Digit}{6}/gu))

const str4 = `... <!-- My -- comment
test --> ..  <!----> ..
`;
console.log(str4.match(/<!.+?>/sg)) //lazzy quantificator
console.log(str4.match(/<![^<!]*>/g)) //altrnative option to lazzy quantificator

const str5 = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str5.match(/<[^<]+>/g))

const regexp = /(\p{Hex_Digit}{2}:){5}(\p{Hex_Digit}{2})/u;
console.log( regexp.test('01:32:54:67:89:AB') ); 
console.log( regexp.test('0132546789AB') ); 
console.log( regexp.test('01:32:54:67:89') ); 
console.log( regexp.test('01:32:54:67:89:ZZ') ) 

const reg = /#(\p{Hex_Digit}{3}){1,2}\b/gu;
let str6 = "color: #3f3; background-color: #AA00ef; and: #abcd";
console.log( str6.match(reg) );

const regexp1 = /-?\d+(\.\d+)?/g;
const str7 = "-1.5 0 2 -123.4.";
console.log( str7.match(regexp1) ); // -1.5, 0, 2, -123.4