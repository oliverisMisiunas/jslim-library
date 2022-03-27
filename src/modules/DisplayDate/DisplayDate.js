function DisplayDate() {
    const jmdy = document.getElementsByClassName("jdate-mdy");
    const jdmy = document.getElementsByClassName("jdate-dmy");
    const jymd = document.getElementsByClassName("jdate-ymd");
    const jtoday = new Date();
    const jyear = jtoday.getFullYear();
    const jmonth = jtoday.getMonth() + 1;
    const jday = jtoday.getDate();

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