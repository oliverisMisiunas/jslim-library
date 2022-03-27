function PushToArray() {
    const jinputArr = [];
    const jinputBox = document.getElementsByClassName("jinput");
    const jinputBtn = document.getElementsByClassName("jinput-btn");
    const jinputBoxArr = [];

    for (let i = 0; i < jinputBox.length; i++) {
        jinputBoxArr.push(jinputBox[i]);
    }

    const jinputBtnArr = [];

    for (let i = 0; i < jinputBtn.length; i++) {
        jinputBtnArr.push(jinputBtn[i]);
        for (let j = 0; j < jinputBox.length; j++) {
            jinputBtnArr[i].addEventListener("click", () => {
                if (jinputArr.length < jinputBox.length) {
                    jinputArr.push(jinputBox[j].value);
                }
            });
        }
    }
}

export default PushToArray;