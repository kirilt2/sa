


// Listen for the 'keyup' event on the document
document.addEventListener("keyup", function(event) {
    // Check if the key pressed is the backtick (`) key
    if (event.key === "`") {
        // Prompt the user to type a command in the console
        console.log("Type a command in the console:");
        // Listen for input in the console
        console.log("Console Command:");
        console.log(`>`);
        let command = prompt();
        // Call the function to handle the command
        handleConsoleCommand(command);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the user's IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            console.log("User IP:");
        })
        .catch(error => {
            console.error("Error fetching user IP:", error);
        });

    // Other client-side JavaScript code...

    // English Translate
    document.getElementById('englishButton').addEventListener('click', function() {
        let userName = localStorage.getItem('userName');
        document.querySelector('h1').textContent = 'DuckAgent';
        document.querySelector('.profile-info p:nth-of-type(1)').textContent = 'Age: 13';
        document.querySelector('.profile-info p:nth-of-type(2)').textContent = 'Email: kiril.tx07@gmail.com';
        document.querySelector('.experience h2').textContent = 'Experience';
        const experienceItems = document.querySelectorAll('.experience li');
        experienceItems[0].textContent = 'Project A - Discord bot Senior Programmer For Emerald Origin Studios';
        document.getElementById('timerButton').textContent = 'Open Timer';
        document.getElementById('Calculator').textContent = 'Open Calculator';
        document.querySelector('.button-no:nth-of-type(1)').textContent = 'Not working';
        document.querySelector('.button-no:nth-of-type(2)').textContent = 'Not working';
        document.querySelector('.button-no:nth-of-type(3)').textContent = 'Not working';
        document.getElementById('Lan').textContent = 'Language';
        document.getElementById('user-welcome').textContent = `Welcome ${userName || 'Guest'}`;
        console.log("Text Successfully Switched To English");
    });

    // Russian Translate
    document.getElementById('russianButton').addEventListener('click', function() {
        let userName = localStorage.getItem('userName');
        document.querySelector('h1').textContent = 'DuckAgent';
        document.querySelector('.profile-info p:nth-of-type(1)').textContent = 'Возраст: 13';
        document.querySelector('.profile-info p:nth-of-type(2)').textContent = 'Email: kiril.tx07@gmail.com';
        document.querySelector('.experience h2').textContent = 'Опыт';
        const experienceItems = document.querySelectorAll('.experience li');
        experienceItems[0].textContent = 'Проект А -Старший программист Discord-бота Emerald Origin Studios';
        document.getElementById('timerButton').textContent = 'Открыть Таймер';
        document.getElementById('Calculator').textContent = 'Открыть Калькулятор';
        document.querySelector('.button-no:nth-of-type(1)').textContent = 'Не работает';
        document.querySelector('.button-no:nth-of-type(2)').textContent = 'Не работает';
        document.querySelector('.button-no:nth-of-type(3)').textContent = 'Не работает';
        document.getElementById('user-welcome').textContent = `Welcome ${userName || 'Guest'}`;
        document.getElementById('Lan').textContent = 'Язык';
        console.log("Text Successfully Switched To Russian");
    });

    // Buttons to Projects
    const timerButton = document.getElementById("timerButton");
    timerButton.addEventListener("click", function() {
        try {
            window.location.href = "./timer.html";
        } catch (error) {
            console.error("Navigation error: ", error);
            alert("Failed to navigate. Please check the file path.");
        }
    });

    const calculatorButton = document.getElementById("Calculator");
    calculatorButton.addEventListener("click", function() {
        try {
            window.location.href = "./calculator.html";
        } catch (error) {
            console.error("Navigation error: ", error);
            alert("Failed to navigate. Please check the file path.");
        }
    });
});

