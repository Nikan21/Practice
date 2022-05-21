"use strict";

function formatDate(date) {
  const diff = new Date() - date;
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(diff / 60000);

  if (diff <= 1000) {
    return "прямо сейчас";
  } else if (sec <= 60) {
    return `${sec} сек. назад`;
  } else if (min <= 60) {
    return `${min} мин. назад`;
  }
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((item) => 
      item.slice(-2)
  );
    return d.slice(0, 3).join('.') + ' ' + d.slice(3, ).join(':')
}

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
