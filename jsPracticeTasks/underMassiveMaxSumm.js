"use strict";

const getMaxSubSum = (array) => {
    let resultFirst = 0
    let resultSecond = 0
  
    for (let i = 0; i < array.length; i++) {
      
      for (let j = i; j < array.length; j++) {
         resultSecond += array[j];
  
         if(resultFirst <= resultSecond){
           resultFirst = resultSecond
         }
        } 
  
       resultSecond = 0
    }
  
    if (resultFirst < 0) resultFirst = 0
  
    return resultFirst
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) )