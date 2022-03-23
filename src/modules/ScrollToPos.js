function ScrollToPos() {
    let jscrollto = document.getElementsByClassName("jscrollto");

    for (let i = 0; i < jscrollto.length; i++) {
        jscrollto[i].addEventListener("click", () => {
            let classNames = jscrollto[i].className.split(" ");
            let scrPos = classNames.indexOf("jscrollto");
            let elementas = document.getElementById(`${classNames[scrPos + 1]}`);
            let elemOff = elementas.offsetTop;

            if (classNames[scrPos + 2] == "jsmooth") {
                if (classNames[scrPos + 3] == "jsetpx") {
                    window.scrollTo({
                        left: 0,
                        top: elemOff - classNames[scrPos + 4],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({ left: 0, top: elemOff, behavior: "smooth" });
                }
            } else if (classNames[scrPos + 2] == "jsetpx") {
                window.scrollTo(0, elemOff - classNames[scrPos + 3]);
            } else {
                window.scrollTo(0, elemOff);
            }
        });
    }
}

export default ScrollToPos;