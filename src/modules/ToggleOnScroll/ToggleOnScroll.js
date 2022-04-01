function ToggleOnScroll() {
  const jscrollpos = document.getElementsByClassName("jscrollpos");

  for (let i = 0; i < jscrollpos.length; i++) {
    const arr = jscrollpos[i].className.split(" ");
    const scrPos = arr.indexOf("jscrollpos");

    const pxStart = arr[scrPos + 1];
    const pxStop = arr[scrPos + 2];
    const scrollClass = arr[scrPos + 3].substring(1);

    window.addEventListener("scroll", () => {
      if (window.scrollY > pxStart && window.scrollY < pxStop) {
        jscrollpos[i].classList.add(scrollClass);
      } else if (window.scrollY > pxStart && window.scrollY > pxStop) {
        jscrollpos[i].classList.remove(scrollClass);
      } else if (window.scrollY < pxStart) {
        jscrollpos[i].classList.remove(scrollClass);
      }
    });
  }
}

export default ToggleOnScroll;