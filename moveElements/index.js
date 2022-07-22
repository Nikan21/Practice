"use strict";

document.addEventListener("click", clickOnMouse);

function clickOnMouse(event) {
  const mouse = event.target;
  mouse.tabIndex = "1";
  mouse.focus();
  mouse.style.position = "absolute";

  if (mouse.hasAttribute("tabIndex")) {
    mouse.addEventListener("keydown", function (event) {
      const side = event.code;
      const mouseCord = mouse.getBoundingClientRect();
      const step = 30;

      switch (side) {
        case "ArrowUp":
          mouse.style.top = mouseCord.top - step + "px";
          break;
        case "ArrowRight":
          mouse.style.left = mouseCord.left + step + "px";
          break;
        case "ArrowDown":
          mouse.style.top = mouseCord.top + step + "px";
          break;
        case "ArrowLeft":
          mouse.style.left = mouseCord.left - step + "px";
          break;
      }
    });
  }
}
