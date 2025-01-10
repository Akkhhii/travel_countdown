let day = document.querySelector('#days')
let hour = document.querySelector('#hours')
let minute = document.querySelector('#minutes')
let second = document.querySelector('#seconds')

const targetDate = new Date("2025-01-15T00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    day.innerHTML = `${days} days`;
    hour.innerHTML = `${hours} hrs`;
    minute.innerHTML = `${minutes} min`;
    second.innerHTML = `${seconds} sec`;

}, 1000);