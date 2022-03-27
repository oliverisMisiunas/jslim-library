function ScrollToPos() {
    const jscrollto = document.getElementsByClassName("jscrollto");

    for (let i = 0; i < jscrollto.length; i++) {
        jscrollto[i].addEventListener("click", () => {
            const classNames = jscrollto[i].className.split(" ");
            const scrPos = classNames.indexOf("jscrollto");
            const elementas = document.getElementById(`${classNames[scrPos + 1]}`);
            const elemOff = elementas.offsetTop;

            if (classNames[scrPos + 2] === "jsmooth") {
                if (classNames[scrPos + 3] === "jsetpx") {
                    window.scrollTo({
                        left: 0,
                        top: elemOff - classNames[scrPos + 4],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({ left: 0, top: elemOff, behavior: "smooth" });
                }
            } else if (classNames[scrPos + 2] === "jsetpx") {
                window.scrollTo(0, elemOff - classNames[scrPos + 3]);
            } else {
                window.scrollTo(0, elemOff);
            }
        });
    }
}

export default ScrollToPos;