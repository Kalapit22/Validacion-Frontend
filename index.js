document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const hours = today.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    dateElement.textContent = `${today.toDateString()} - ${greeting}`;
});
