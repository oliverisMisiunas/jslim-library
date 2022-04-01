function ToggleOnClick() {
    const togl = document.getElementsByClassName("jtoggle");
    const toglArr = [];

    for (let i = 0; i < togl.length; i++) {
        const arr = togl[i].className.split(" ").indexOf("jtoggle");
        const vari = togl[i].className.split(" ")[arr + 1];
        toglArr.push(vari);
        const newNam = toglArr[i].substring(1);
        togl[i].addEventListener("click", () => {
            togl[i].classList.toggle(newNam);
        });
    }
}

export default ToggleOnClick;