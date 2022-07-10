"use strict";

grid.addEventListener("click", sortTable);

function sortTable(event) {
  let cellColumn = event.target.cellIndex;
  let dataType = event.target.dataset.type;
  const sortedRows = Array.from(grid.rows).slice(1);

  switch (dataType) {
    case "number":
      const numberSort = sortedRows.sort(
        (rowA, rowB) =>
          rowA.cells[cellColumn].innerHTML - rowB.cells[cellColumn].innerHTML
      );
      grid.tBodies[0].append(...numberSort);
      break;
    case "string":
      const stringSort = sortedRows.sort((rowA, rowB) =>
        rowA.cells[cellColumn].innerHTML > rowB.cells[cellColumn].innerHTML
          ? 1
          : -1
      );
      grid.tBodies[0].append(...stringSort);
      break;
  }
}
