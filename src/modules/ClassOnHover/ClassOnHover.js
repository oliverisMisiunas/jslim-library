function ClassOnHover() {
    const jhover = document.getElementsByClassName("jhover");
    const jhoverArr = [];

    for (let i = 0; i < jhover.length; i++) {
        const arr = jhover[i].className.split(" ").indexOf("jhover");
        const vari = jhover[i].className.split(" ")[arr + 1];
        jhoverArr.push(vari);
        const newNam = jhoverArr[i].substring(1);
        jhover[i].addEventListener("mouseover", () => {
            jhover[i].classList.add(newNam);
        });
        jhover[i].addEventListener("mouseout", () => {
            jhover[i].classList.remove(newNam);
        });
    }
}

export default ClassOnHover;