"use strict";

const cordField = field.getBoundingClientRect();
const cordBall = ball.getBoundingClientRect();
const cordTopField = cordField.top + field.clientTop;
const cordLeftField = cordField.left + field.clientLeft;
const cordBottomField = cordField.bottom - field.clientTop;
const cordRightField = cordField.right - field.clientLeft;

ball.style.position = "absolute";
ball.style.transition = "all 1s";
ball.style.top = cordTopField + "px";
ball.style.left = cordLeftField + "px";

function changeBallPosition(event) {
  let clickCoordX = event.clientX;
  let clickCoordY = event.clientY;
  let scrollY = window.scrollY;

  if (
    clickCoordY + scrollY <= cordTopField + cordBall.height / 2 &&
    clickCoordX <= cordLeftField + cordBall.width / 2
  ) {
    ball.style.top = cordTopField + "px";
    ball.style.left = cordLeftField + "px";
  } else if (
    clickCoordY + scrollY <= cordTopField + cordBall.height / 2 &&
    clickCoordX >= cordRightField - cordBall.width / 2
  ) {
    ball.style.top = cordTopField + "px";
    ball.style.left = cordRightField - cordBall.width + "px";
  } else if (
    clickCoordY >= cordBottomField - scrollY - cordBall.height / 2 &&
    clickCoordX >= cordRightField - cordBall.width / 2
  ) {
    ball.style.top = cordBottomField - cordBall.height + "px";
    ball.style.left = cordRightField - cordBall.width + "px";
  } else if (
    clickCoordY >= cordBottomField - scrollY - cordBall.height / 2 &&
    clickCoordX <= cordLeftField + cordBall.width / 2
  ) {
    ball.style.top = cordBottomField - cordBall.height + "px";
    ball.style.left = cordLeftField + "px";
  } else if (clickCoordX <= cordLeftField + cordBall.width / 2) {
    ball.style.top = clickCoordY + scrollY - cordBall.height / 2 + "px";
    ball.style.left = cordLeftField + "px";
  } else if (clickCoordY + scrollY <= cordTopField + cordBall.height / 2) {
    ball.style.top = cordTopField + "px";
    ball.style.left = clickCoordX - cordBall.width / 2 + "px";
  } else if (clickCoordX >= cordRightField - cordBall.width / 2) {
    ball.style.top = clickCoordY + scrollY - cordBall.height / 2 + "px";
    ball.style.left = cordRightField - cordBall.width + "px";
  } else if (clickCoordY >= cordBottomField - scrollY - cordBall.height / 2) {
    ball.style.top = cordBottomField - cordBall.height + "px";
    ball.style.left = clickCoordX - cordBall.width / 2 + "px";
  } else {
    ball.style.top = clickCoordY + scrollY - cordBall.height / 2 + "px";
    ball.style.left = clickCoordX - cordBall.width / 2 + "px";
  }
}

field.addEventListener("click", changeBallPosition);
