"use strict";

const regexp = /Java(script)?|PHP|C(\+\+)?/ig;
console.log("Java JavaScript PHP C++ C".match(regexp));

let regexp1 = /\[(b|url|quote)].*?\[\/\1]/gs;
let str1 = "[url]http://ya.ru[/url]";
console.log( str1.match(regexp1) );

//make on example
let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
console.log(str.match(/"(\\.|[^"\\])*"/g));

const regexp2 = /<style(\s.*?>|>)/g;
console.log( '<style> <styler> <style test="..."> <style test="..." id="...">'.match(regexp2) );