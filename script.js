let timerInterval;
let totalSeconds = 0;

function updateTimer() {
    if (totalSeconds > 0) {
        totalSeconds--;
        const duration = moment.duration(totalSeconds, 'seconds');
        const formattedTime = moment.utc(duration.asMilliseconds()).format("HH:mm:ss");
        document.getElementById('timer').innerText = formattedTime;
    } else {
        clearInterval(timerInterval);
        alert("Czas się skończył!");
    }
}

document.getElementById('start').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput').value;
    const timeParts = timeInput.split(':');

    if (timeParts.length === 3) {
        const hours = parseInt(timeParts[0]) || 0;
        const minutes = parseInt(timeParts[1]) || 0;
        const seconds = parseInt(timeParts[2]) || 0;

        totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds > 0 && !timerInterval) {
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            alert("Wprowadź poprawny czas!");
        }
    } else {
        alert("Wprowadź czas w formacie HH:mm:ss!");
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    document.getElementById('timer').innerText = "00:00:00";
    document.getElementById('timeInput').value = '';
});
