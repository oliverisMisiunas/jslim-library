function ScrollToBottom() {
    let scrollBottomBtn = document.getElementsByClassName("jscrollbottom");

    for (let i = 0; i < scrollTopBtn.length; i++) {
        scrollBottomBtn[i].addEventListener("click", () => {
            window.window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
        });
    }
}

export default ScrollToBottom;
