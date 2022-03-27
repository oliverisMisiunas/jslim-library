function ScrollToTop() {
  const scrollTopBtn = document.getElementsByClassName("jscrolltop");

  for (let i = 0; i < scrollTopBtn.length; i++) {
    scrollTopBtn[i].addEventListener("click", () => {
      window.window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
}

export default ScrollToTop;