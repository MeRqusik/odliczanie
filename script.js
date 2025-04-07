let countdownInterval;

document.getElementById('startButton').addEventListener('click', function() {
    const startInput = document.getElementById('start').value;
    const minutyInput = parseInt(document.getElementById('minuty').value);

    if (startInput && !isNaN(minutyInput)) {
        const startTime = moment(startInput, 'HH:mm');
        const koniecTime = startTime.clone().add(minutyInput, 'minutes');

        // Ustawienie czasu zakończenia w polu
        document.getElementById('koniec').value = koniecTime.format('HH:mm');

        // Rozpoczęcie odliczania
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            const currentTime = moment();
            const remainingTime = koniecTime.diff(currentTime);

            if (remainingTime > 0) {
                const duration = moment.duration(remainingTime);
                const hours = Math.floor(duration.asHours());
                const minutes = duration.minutes();
                document.getElementById('pozostalo').value = `${hours} godz. ${minutes} min.`;
            } else {
                clearInterval(countdownInterval);
                document.getElementById('pozostalo').value = "Czas minął!";
            }
        }, 1000);
    } else {
        alert("Proszę wprowadzić poprawne dane.");
    }
});