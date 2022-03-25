function RemoveOnClick() {
    let remuv = document.getElementsByClassName("jremove");
    let remuvArr = [];

    for (let i = 0; i < remuv.length; i++) {
        let arr = remuv[i].className.split(" ").indexOf("jremove");
        let vari = remuv[i].className.split(" ")[arr + 1];
        remuvArr.push(vari);
        remuv[i].addEventListener("click", () => {
            remuv[i].classList.remove(remuvArr);
        });
    }
}

export default RemoveOnClick;