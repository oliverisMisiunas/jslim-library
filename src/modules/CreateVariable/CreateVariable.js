function CreateVariable() {
    let gets = document.getElementsByClassName("jget");
    let nameArr = [];

    for (let i = 0; i < gets.length; i++) {
        let arr = gets[i].className.split(" ").indexOf("jget");
        let vari = gets[i].className.split(" ")[arr + 1];
        nameArr.push(vari);
    }

    nameArr.forEach((e) => {
        window[e] = document.getElementsByClassName(e);
        window[e] = window[e][0];
    });
}

export default CreateVariable;