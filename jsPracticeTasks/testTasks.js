"use strict";

const array = [1, 3, 5, 4, 5, 7]

function checkArray(array) {
    const arrayResult = []
    let a, b, c
    
    for(let i = 0; i < array.length - 2; i++) {
        a = array[i]
        b = array[i + 1]
        c = array[i + 2]
        
        if(a>b && b<c || a<b && b>c) {
            arrayResult.push(1)
        }else{
            arrayResult.push(0)
        }
    }

    return arrayResult
}
        
console.log( checkArray(array) )

const array2 = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];

function checkMatrix(matrix) {
  const firstRow = matrix[0];
  const secondRow = matrix[1];
  const thirdRow = matrix[2];
  let checkArray;
  let a, b, c;
  const resultArray = [];

  for (let i = 0; i < firstRow.length - 2; i++) {
    checkArray = [];
    a = firstRow[i];
    b = firstRow[i + 1];
    c = firstRow[i + 2];
    checkArray.push(a, b, c);

    a = secondRow[i];
    b = secondRow[i + 1];
    c = secondRow[i + 2];
    checkArray.push(a, b, c);

    a = thirdRow[i];
    b = thirdRow[i + 1];
    c = thirdRow[i + 2];
    checkArray.push(a, b, c);

    if (
      checkArray.includes(1) &&
      checkArray.includes(2) &&
      checkArray.includes(3) &&
      checkArray.includes(4) &&
      checkArray.includes(5) &&
      checkArray.includes(6) &&
      checkArray.includes(7) &&
      checkArray.includes(8) &&
      checkArray.includes(9)
    ) {
      resultArray.push(true);
    } else {
      resultArray.push(false);
    }
  }

  return resultArray;
}

console.log(checkMatrix(array2));

const array3 = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
];
const sideText = ["LEFT", "RIGHT", "LEFT"];
const limitLetters = 16;

function formateText(text, formateSides, limitLetters) {
  const formateText = [];
  let border = "";
  const regex = /\b\w.{1,14}\w\b/g;

  for (let i = 1; i <= limitLetters + 2; i++) {
    border += "*";
  }

  formateText.push(border);

  for (let i = 0; i < text.length; i++) {
    const stringArray = text[i];
    let string = stringArray.join(" ");
    let space = "";
    const spaceDiff = limitLetters - string.length;

    for (let j = 0; j < spaceDiff; j++) {
      space += " ";
    }

    if (string.length <= limitLetters) {
      switch (formateSides[i]) {
        case "LEFT":
          formateText.push(`*${string}${space}*`);
          break;
        case "RIGHT":
          formateText.push(`*${space}${string}*`);
          break;
      }
    } else {
      const stringArrayBig = string.match(regex);
      for (let string of stringArrayBig) {
        let space = "";
        const spaceDiff = limitLetters - string.length;

        for (let j = 0; j < spaceDiff; j++) {
          space += " ";
        }

        switch (formateSides[i]) {
          case "LEFT":
            formateText.push(`*${string}${space}*`);
            break;
          case "RIGHT":
            formateText.push(`*${space}${string}*`);
            break;
        }
      }
    }
  }

  formateText.push(border);

  return formateText.join("\n");
}

console.log(formateText(array3, sideText, limitLetters));
