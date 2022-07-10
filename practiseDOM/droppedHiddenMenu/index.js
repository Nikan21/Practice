"use strict";

const hideMenu = document.querySelectorAll(".hideMenu");
const rightTriangle = document.querySelector(".rightTriangle");

hideMenu.forEach((item) => {
  item.style.display = "none";
});

function showMenu() {
  if (rightTriangle.style.display !== "none") {
    hideMenu[0].style.display = "inline";
    hideMenu[1].style.display = "block";
    rightTriangle.style.display = "none";
  } else {
    hideMenu.forEach((item) => {
      item.style.display = "none";
    });
    rightTriangle.style.display = "inline";
  }
}

wrapper.addEventListener("click", showMenu);
