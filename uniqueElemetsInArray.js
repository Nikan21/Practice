"use strict";

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let timeArray = []

    arr.forEach((item) => {
        if(!timeArray.includes(item)){
            timeArray.push(item)
        }
    })

    return timeArray
}


console.log(unique(strings));
