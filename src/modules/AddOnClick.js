function AddOnClick() {
    let ed = document.getElementsByClassName("jadd");
    let edArr = [];

    for (let i = 0; i < ed.length; i++) {
        let arr = ed[i].className.split(" ").indexOf("jadd");
        let vari = ed[i].className.split(" ")[arr + 1];
        edArr.push(vari);
        let newNam = edArr[i].substring(1);
        ed[i].addEventListener("click", () => {
            ed[i].classList.add(newNam);
        });
    }
}

export default AddOnClick;