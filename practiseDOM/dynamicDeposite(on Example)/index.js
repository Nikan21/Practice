"use strict";

let form = document.forms.calculator;

form.money.addEventListener("input", changeValue);
form.months.addEventListener("change", changeValue);
form.interest.addEventListener("input", changeValue);

function changeValue(event) {
  let initial = form.money.value;
  if (!initial) return;

  let interest = form.interest.value / 100;
  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);
  let height = (result / form.money.value) * 100 + "px";

  document.getElementById("height-after").style.height = height;
  document.getElementById("money-before").textContent = initial;
  document.getElementById("money-after").textContent = result;
}

changeValue();
