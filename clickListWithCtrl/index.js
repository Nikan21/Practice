"use strict";

ul.addEventListener("click", selectLi);
ul.addEventListener("mousedown", function (event) {
  event.preventDefault();
});

function selectLi(event) {
  const allLi = ul.querySelectorAll("li");
  const li = event.target.closest("li");
  
  if (!li) return;

  if (event.ctrlKey || event.metaKey) {
    li.className === "selected"
      ? (li.className = null)
      : (li.className = "selected");
  } else {
    allLi.forEach((item) => {
      item.className = null;
    });
    li.className = "selected";
  }
}
