let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let sc = document.querySelector("#sc")


setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM"

    // convert to 12-hour format
    h = h % 12;
    if (h === 0) {
        h = 12;
    }

    // add zero before single digit
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am
})

// let currentColor = "#2f363e";

// document.getElementById('mode-toggle').addEventListener('click', () => {
//     if (currentColor == "#2f363e") {
//         document.body.style.backgroundColor = "#fff";
//         currentColor = "#fff";
//     } else {
//         document.body.style.backgroundColor = "#2f363e";
//         currentColor = "#2f363e";
//     }
// })

// document.getElementById('mode-toggle').addEventListener('click', () => {
//     if (currentColor == "#2f363e") {
//         document.querySelector('.container').style.backgroundColor = "#fff";
//         currentColor = "#fff";
//     } else {
//         document.querySelector('.container').style.backgroundColor = "#2f363e";
//         currentColor = "#2f363e";
//     }
// })

// document.getElementById('mode-toggle').addEventListener('click', () => {
//     if (currentColor == "#2f363e") {
//         document.querySelector('.clock').style.backgroundColor = "#fff";
//         currentColor = "#fff";
//     } else {
//         document.querySelector('.clock').style.backgroundColor = "#2f363e";
//         currentColor = "#2f363e";
//     }
// })

// let currentColor = "#2f363e";

// document.getElementById('mode-toggle').addEventListener('click', () => {
//   const nextColor = currentColor === "#2f363e" ? "#fff" : "#2f363e";
//   document.body.style.backgroundColor = nextColor;
//   document.querySelector('.container').style.backgroundColor = nextColor;
//   document.querySelector('.clock').style.backgroundColor = nextColor;
//   currentColor = nextColor;
// })
