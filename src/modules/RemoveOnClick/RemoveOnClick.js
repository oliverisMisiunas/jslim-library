function RemoveOnClick() {
    const remuv = document.getElementsByClassName("jremove");
    const remuvArr = [];

    for (let i = 0; i < remuv.length; i++) {
        const arr = remuv[i].className.split(" ").indexOf("jremove");
        const vari = remuv[i].className.split(" ")[arr + 1];
        remuvArr.push(vari);
        remuv[i].addEventListener("click", () => {
            remuv[i].classList.remove(remuvArr);
        });
    }
}

export default RemoveOnClick;