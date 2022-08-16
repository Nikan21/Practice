"use strict";

let regexp = /(?<!-)(?<!\d)\d+/g;
let str = "0 12 -5 123 -18";
console.log( str.match(regexp) ); // 0, 12, 123

let regexp1 = /(?<=<body\s.*>)/;
let str1 = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;
str1 = str1.replace(regexp1, `<h1>Hello</h1>`);
console.log(str1)