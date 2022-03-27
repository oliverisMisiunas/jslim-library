function AddOnClick() {
    const ed = document.getElementsByClassName("jadd");
    const edArr = [];

    for (let i = 0; i < ed.length; i++) {
        const arr = ed[i].className.split(" ").indexOf("jadd");
        const vari = ed[i].className.split(" ")[arr + 1];
        edArr.push(vari);
        const newNam = edArr[i].substring(1);
        ed[i].addEventListener("click", () => {
            ed[i].classList.add(newNam);
        });
    }
}

export default AddOnClick;