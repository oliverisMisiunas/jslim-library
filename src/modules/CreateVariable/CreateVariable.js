function CreateVariable() {
    const gets = document.getElementsByClassName("jget");
    const nameArr = [];

    for (let i = 0; i < gets.length; i++) {
        const arr = gets[i].className.split(" ").indexOf("jget");
        const vari = gets[i].className.split(" ")[arr + 1];
        nameArr.push(vari);
    }

    nameArr.forEach((e) => {
        window[e] = document.getElementsByClassName(e);
        window[e] = window[e][0];
    });
}

export default CreateVariable;