function CenterElements() {
    let flexCol = document.getElementsByClassName("jfcol");
    let flexRow = document.getElementsByClassName("jfrow");

    for (let i = 0; i < flexCol.length; i++) {
    let col = flexCol[i];
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.justifyContent = "center";
    col.style.alignItems = "center";
    }

    for (let i = 0; i < flexRow.length; i++) {
    let row = flexRow[i];
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent = "center";
    row.style.alignItems = "center";
    }
}

export default CenterElements;