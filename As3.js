document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('res');

    
    window.addEventListener('click', () => inputField.focus());

    
    inputField.addEventListener('focus', function () {
        document.addEventListener('keydown', keyHandler);
    });

    
    inputField.addEventListener('blur', function () {
        document.removeEventListener('keydown', keyHandler);
    });

    function keyHandler(event) {
        const key = event.key;
        const validKeys = '0123456789+-*/.%';

        if (validKeys.includes(key)) {
            Solve(key === '*' ? '×' : key === '/' ? '÷' : key);
        } else if (key === 'Enter') {
            Result();
        } else if (key === 'Backspace') {
            Back();
        } else if (key.toLowerCase() === 'c') {
            Clear();
        }
    }
});

// Function to add values to the display
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
    playClickSound();
}

// Function to compute the result
function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('×', '*').replace('÷', '/'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
    playClickSound();
}

// Function to clear the display
function Clear() {
    document.getElementById('res').value = '';
    playClickSound();
}

// Function to delete the last entered character
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
    playClickSound();
}

// Play click sound
function playClickSound() {
    let audio = new Audio('click.mp3'); // Ensure `click.mp3` is in your project folder
    audio.play();
}

// Button click animation effect
document.querySelectorAll('.btn input').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100);
    });
});
