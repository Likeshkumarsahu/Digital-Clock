function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Dynamic color changes
    const hoursDial = document.getElementById('hours-dial');
    const minutesDial = document.getElementById('minutes-dial');
    const secondsDial = document.getElementById('seconds-dial');

    const hourColor = `hsl(${(hours / 24) * 360}, 100%, 50%)`;
    const minuteColor = `hsl(${(minutes / 60) * 360}, 100%, 50%)`;
    const secondColor = `hsl(${(seconds / 60) * 360}, 100%, 50%)`;

    hoursDial.style.backgroundColor = hourColor;
    minutesDial.style.backgroundColor = minuteColor;
    secondsDial.style.backgroundColor = secondColor;
}

updateClock();
setInterval(updateClock, 1000);