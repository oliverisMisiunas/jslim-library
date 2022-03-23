function ToggleOnClick() {
    let togl = document.getElementsByClassName("jtoggle");
    let toglArr = [];

    for (let i = 0; i < togl.length; i++) {
        let arr = togl[i].className.split(" ").indexOf("jtoggle");
        let vari = togl[i].className.split(" ")[arr + 1];
        toglArr.push(vari);
        let newNam = toglArr[i].substring(1);
        togl[i].addEventListener("click", () => {
            togl[i].classList.toggle(newNam);
        });
    }
}

export default ToggleOnClick;