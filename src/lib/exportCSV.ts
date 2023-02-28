export function htmlTableToCsv(tableId: string, name: string): void {
  const csv = getCsvString(tableId);
  const file = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = `${name}.csv`;
  link.click();
}

function getTable(tableId: string): HTMLTableElement {
  return document.getElementById(tableId) as HTMLTableElement;
}

function getCellValue(cell: HTMLTableCellElement): string {
  const cellValue = (cell.textContent || "").replace(/\n/g, "");

  return cellValue;
}

export function getCsvString(tableId: string): string {
  const table = getTable(tableId);
  let csv = "";
  const rows = Array.from(table.rows);

  for (const row of rows) {
    csv += getRowString(row);
  }

  return csv;
}

function getRowString(row: HTMLTableRowElement): string {
  let rowString = "";
  const cells = row.cells;
  let skipCount;
  let cellValue;
  const rowSpanCount: number[] = [];

  for (let j = 0; j < cells.length; j++) {
    const cell = cells[j];

    if (skipCount && shouldSkipCell(skipCount, rowSpanCount, j)) {
      updateSkipAndRowSpanCount(cell, skipCount, rowSpanCount, j);
      continue;
    }

    cellValue = getCellValue(cell);
    rowString += cellValue + ",";
    updateSkipAndRowSpanCount(cell, skipCount, rowSpanCount, j);
  }
  return rowString.slice(0, -1) + "\n";
}

function shouldSkipCell(
  skipCount: number,
  rowSpanCount: number[],
  j: number
): boolean {
  return skipCount > 0 || rowSpanCount[j] > 0;
}

function updateSkipAndRowSpanCount(
  cell: HTMLTableCellElement,
  skipCount: number | undefined,
  rowSpanCount: number[],
  j: number
): void {
  if (skipCount === undefined) {
    skipCount = 0;
  }
  skipCount = skipCount + cell.colSpan - 1;
  rowSpanCount[j + skipCount + 1] = cell.rowSpan - 1;
}
