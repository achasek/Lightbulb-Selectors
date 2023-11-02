let count = 0;

const bulb1 = document.querySelector('#lightbulb1');
const bulb2 = document.querySelector('#lightbulb2');
const bulb3 = document.querySelector('#lightbulb3');

const output = document.querySelector('.subtitle');

bulb1.addEventListener('click', () => {
    count++;
    output.innerHTML = "You've clicked the lights " + count + " times";
    bulb1.classList.toggle('active');
});

bulb2.addEventListener('click', () => {
    count++;
    output.innerHTML = "You've clicked the lights " + count + " times";
    bulb2.classList.toggle('active');
});

bulb3.addEventListener('click', () => {
    count++;
    output.innerHTML = "You've clicked the lights " + count + " times";
    bulb3.classList.toggle('active');
});