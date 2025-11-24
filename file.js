const display1 = document.getElementById('display');
const display2 = document.getElementById('display2');
function addToDisplay(value) {
    display1.value += value;
}

function calculateResult(params) {
    
    try {
        const result = eval(display1.value);
        display2.value = result;
        display.value = '';
    } catch (error) {
        display2.value = 'Error';
    }

    
}

function clearLastElement() {
    let currentValue = display1.value;
    display1.value = currentValue.slice(0,-1);
}

function clearDisplay() {
    display1.value = '';
}

const clearButton = document.getElementById('clearbtn');

clearButton.addEventListener('dblclick', function () {
    display1.value = '';
    display2.value = '';
})


const themeToggle = document.getElementById('theme-toggle');
const light = document.getElementById('light');
const dark = document.getElementById('dark');


const body = document.body;
themeToggle.addEventListener('click', () => {body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        dark.style.display = 'block';
        light.style.display = 'none';
    } else {
        dark.style.display = 'none';
        light.style.display = 'block';
    }
})


