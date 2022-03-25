//a utility fn for CenterCols and CenterRows
function CenterElement(element) {
  element.style.display = 'flex';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
  return element;
}

function CenterElements() {
  let flexCol = document.getElementsByClassName('jfcol');
  let flexRow = document.getElementsByClassName('jfrow');

  for (let i = 0; i < flexCol.length; i++) {
    let col = CenterElement(flexCol[i]);
    col.style.flexDirection = 'column';
  }
  for (let i = 0; i < flexRow.length; i++) {
    let row = CenterElement(flexRow[i]);
    row.style.flexDirection = 'row';
  }
}

export default CenterElements;
