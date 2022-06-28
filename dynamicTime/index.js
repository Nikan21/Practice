"use strict";

let hour;
let minute;
let second;

function time() {
  let date = new Date();

  hour = document.querySelector(".hour");
  let h = date.getHours();
  if (h < 10) hour.innerHTML = `0${h}`;
  hour.innerHTML = date.getHours();

  minute = document.querySelector(".minute");
  let m = date.getMinutes();
  if (m < 10) m = `0${m}`;
  minute.innerHTML = m;

  second = document.querySelector(".second");
  let s = date.getSeconds();
  if (s < 10) s = `0${s}`;
  second.innerHTML = s;
}

let startInterval;

function start() {
  startInterval = setInterval(time, 1000);
  time();
}

function stop() {
  clearInterval(startInterval);
  hour.innerHTML = "hh";
  minute.innerHTML = "mm";
  second.innerHTML = "ss";
}
