function ToggleOnScroll() {
  let jscrollpos = document.getElementsByClassName("jscrollpos");

  for (let i = 0; i < jscrollpos.length; i++) {
    let arr = jscrollpos[i].className.split(" ");
    let scrPos = arr.indexOf("jscrollpos");

    let pxStart = arr[scrPos + 1];
    let pxStop = arr[scrPos + 2];
    let scrollClass = arr[scrPos + 3].substring(1);

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