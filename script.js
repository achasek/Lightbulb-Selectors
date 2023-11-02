let count = 0;

// const bulbContainer = document.querySelector('.row');

const bulb1 = document.querySelector('#lightbulb1');
const bulb2 = document.querySelector('#lightbulb2');
const bulb3 = document.querySelector('#lightbulb3');

const output = document.querySelector('.subtitle');

// bulbsContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('item')) {
//         count++;
//         output.innerHTML = `You've clicked the lights ${count} time${count === 1 ? '' : 's'}`;
//         event.target.classList.toggle('active');
//     }
// });

bulb1.addEventListener('click', () => {
    count++;
    output.innerHTML = `You've clicked the lights ${count} time${count === 1 ? '' : 's'}`
    bulb1.classList.toggle('active');
});

bulb2.addEventListener('click', () => {
    count++;
    output.innerHTML = `You've clicked the lights ${count} time${count === 1 ? '' : 's'}`
    bulb2.classList.toggle('active');
});

bulb3.addEventListener('click', () => {
    count++;
    output.innerHTML = `You've clicked the lights ${count} time${count === 1 ? '' : 's'}`
    bulb3.classList.toggle('active');
});

bulb1.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});

bulb2.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});

bulb3.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});