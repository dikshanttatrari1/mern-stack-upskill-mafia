const blue = document.getElementById('box-1');
const red = document.getElementById('box-2');
const green = document.getElementById('box-3');
const yellow = document.getElementById('box-4');

blue.addEventListener('click', () => {
    blue.style.backgroundColor = 'blue';
})

red.addEventListener('click', () => {
    red.style.backgroundColor = 'red';
})

green.addEventListener('click', () => {
    green.style.backgroundColor = 'green';
})

yellow.addEventListener('click', () => {
    yellow.style.backgroundColor = 'yellow';
})

const inputBox = document.getElementById('input-box');
const nameDisplay = document.querySelector('.navbar h1');
 
document.getElementById('button').addEventListener('click', () => {
    const name = inputBox.value.trim();

    if(name !== ''){
        nameDisplay.innerHTML = `Hello, ${name}!`;
    }else{
        nameDisplay.innerHTML = `Hello`;
    }
    inputBox.value = '';
})
