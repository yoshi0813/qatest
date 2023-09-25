console.log('Hello World!');
const target = document.getElementById('target');
//target.classList.add('red');
target.addEventListener('click', () => {
    target.classList.add('red');
    console.log('Hell World!');
});
target2.addEventListener('click', () => {
    target2.classList.add('blue');
});
target3.addEventListener('click', () => {
    target3.classList.add('green');
});