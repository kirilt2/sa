let timer;
let seconds = 0;
let isRunning = false;
let history = [];

// Get buttons
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const clearLastHistoryButton = document.getElementById('clear-history-button');
const historyList = document.getElementById('history');

// Updating System Timer
function updateDisplay() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

// Start Button
function startTimer() {
    if (!isRunning) {
        console.log("Timer Started")
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

// Pasue Button
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        console.log("Timer Pasue")
    }
}

// Stop button
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        console.log("Timer Stop");
    }
    if (seconds > 0) {
        addHistory(seconds);
        seconds = 0;
        updateDisplay();
    }
}


// Add History
function addHistory(timeInSeconds) {
    const hrs = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(timeInSeconds % 60).padStart(2, '0');
    const timeString = `${hrs}:${mins}:${secs}`;
    
    const li = document.createElement('li');
    li.textContent = timeString;
    historyList.appendChild(li);
    
    history.push(timeString);
    localStorage.setItem('history', JSON.stringify(history));
    console.log(` History added ${history}`)
}

// Clear History
function clearLastHistory() {
    if (history.length > 0) {
        history.pop();
        localStorage.setItem('history', JSON.stringify(history));
        historyList.removeChild(historyList.lastChild);
        console.log(`History is clear`)
    }
}

// Load History
function loadHistory() {
    const savedHistory = JSON.parse(localStorage.getItem('history'));
    if (savedHistory) {
        history = savedHistory;
        history.forEach(timeString => {
            const li = document.createElement('li');
            li.textContent = timeString;
            historyList.appendChild(li);
            console.log(`History Successful loaded ${history}`)
        });
    }
}
// Get buttons redy click
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
clearLastHistoryButton.addEventListener('click', clearLastHistory);


// To main Page
window.addEventListener('load', loadHistory);
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page index.html")
    const backButton = document.getElementById("Back");
    backButton.addEventListener("click", function() {
        window.location.href = "/index.html"; 
    });
});
