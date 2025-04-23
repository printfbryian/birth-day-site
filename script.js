// Countdown Timer
function countdown() {
    const birthday = new Date("2025-04-25T00:00:00"); // Change this to your birthday date
    const now = new Date();
    const timeLeft = birthday - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerText = 'It\'s my birthday today!';
    } else {
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerText = `${daysLeft} days`;
    }
}

setInterval(countdown, 1000);

// Send message function (simulating message send)
function sendMessage() {
    const message = document.getElementById("message").value;
    if (message) {
        alert("Your message has been sent: " + message);
        document.getElementById("message").value = ""; // Clear the input field
    } else {
        alert("Please write a wish before sending!");
    }
}

countdown();
