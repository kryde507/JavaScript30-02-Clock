const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    let s = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${s}deg)`;

    const minutes = now.getMinutes();
    let m = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${m}deg)`;

    const hours = now.getHours();
    let h = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${h}deg)`;
}

window.onload = setInterval(setDate, 1000);