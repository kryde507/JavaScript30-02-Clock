const sec = document.querySelector('.second-hand');
const min = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

// const moveElement = () => {
//     r += 6;
//     sec.style.transform = `rotate(${r}deg)`;
// }

window.onload = function () {
    let s = 90;
    let m = 90;
    let h = 90;
    const moveSecond = () => {
        s += 6;
        sec.style.transform = `rotate(${s}deg)`;
    }
    const moveMinute = () => {
        m += 6;
        min.style.transform = `rotate(${m}deg)`;
    }
    const moveHour = () => {
        h += 1.5;
        hour.style.transform = `rotate(${h}deg)`;
    }

    setInterval(moveSecond, 1000);
    setInterval(moveMinute, 60000);
    setInterval(moveHour, 60000);
}