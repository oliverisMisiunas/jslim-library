function DisplayDate() {
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
}

export default DisplayDate;