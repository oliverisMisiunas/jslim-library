function jslim() {
  // Center elements, flexbox

  let flexCol = document.getElementsByClassName("jfcol");
  let flexRow = document.getElementsByClassName("jfrow");

  for (let i = 0; i < flexCol.length; i++) {
    let col = flexCol[i];
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.justifyContent = "center";
    col.style.alignItems = "center";
  }

  for (let i = 0; i < flexRow.length; i++) {
    let row = flexRow[i];
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent = "center";
    row.style.alignItems = "center";
  }

  // Display current date

  let jmdy = document.getElementsByClassName("jdate-mdy");
  let jdmy = document.getElementsByClassName("jdate-dmy");
  let jymd = document.getElementsByClassName("jdate-ymd");

  let jtoday = new Date();

  let jyear = jtoday.getFullYear();
  let jmonth = jtoday.getMonth() + 1;
  let jday = jtoday.getDate();

  for (let i = 0; i < jmdy.length; i++) {
    jmdy[i].textContent = `${jmonth}/${jday}/${jyear}`;
  }

  for (let i = 0; i < jdmy.length; i++) {
    jdmy[i].textContent = `${jday}/${jmonth}/${jyear}`;
  }

  for (let i = 0; i < jymd.length; i++) {
    jymd[i].textContent = `${jyear}/${jmonth}/${jday}`;
  }

  // Create a variable for an element

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

  // Class on hover

  let jhover = document.getElementsByClassName("jhover");

  let jhoverArr = [];

  for (let i = 0; i < jhover.length; i++) {
    let arr = jhover[i].className.split(" ").indexOf("jhover");
    let vari = jhover[i].className.split(" ")[arr + 1];
    jhoverArr.push(vari);
    let newNam = jhoverArr[i].substring(1);
    jhover[i].addEventListener("mouseover", () => {
      jhover[i].classList.add(newNam);
    });
    jhover[i].addEventListener("mouseout", () => {
      jhover[i].classList.remove(newNam);
    });
  }

  // Push input data to an array

  let jinputArr = [];

  let jinputBox = document.getElementsByClassName("jinput");
  let jinputBtn = document.getElementsByClassName("jinput-btn");

  let jinputBoxArr = [];

  for (let i = 0; i < jinputBox.length; i++) {
    jinputBoxArr.push(jinputBox[i]);
  }

  let jinputBtnArr = [];

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

  // Toggles class when window's offset-Y is at a set point

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

  // Scroll to top on click

  let scrollTopBtn = document.getElementsByClassName("jscrolltop");

  for (let i = 0; i < scrollTopBtn.length; i++) {
    scrollTopBtn[i].addEventListener("click", () => {
      window.window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }

  // Toogle, add, remove

  let togl = document.getElementsByClassName("jtoggle");
  let ed = document.getElementsByClassName("jadd");
  let remuv = document.getElementsByClassName("jremove");

  let toglArr = [];
  let edArr = [];
  let remuvArr = [];

  for (let i = 0; i < togl.length; i++) {
    let arr = togl[i].className.split(" ").indexOf("jtoggle");
    let vari = togl[i].className.split(" ")[arr + 1];
    toglArr.push(vari);
    let newNam = toglArr[i].substring(1);
    togl[i].addEventListener("click", () => {
      togl[i].classList.toggle(newNam);
    });
  }

  for (let i = 0; i < ed.length; i++) {
    let arr = ed[i].className.split(" ").indexOf("jadd");
    let vari = ed[i].className.split(" ")[arr + 1];
    edArr.push(vari);
    let newNam = edArr[i].substring(1);
    ed[i].addEventListener("click", () => {
      ed[i].classList.add(newNam);
    });
  }

  for (let i = 0; i < remuv.length; i++) {
    let arr = remuv[i].className.split(" ").indexOf("jremove");
    let vari = remuv[i].className.split(" ")[arr + 1];
    remuvArr.push(vari);
    remuv[i].addEventListener("click", () => {
      remuv[i].classList.remove(remuvArr);
    });
  }

  // Scroll automatically to a set position

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

export default jslim;
