const squares = document.querySelector('.squares');
const subSquares = document.createElement('div');
subSquares.classList.add('subSquares');
const square = document.createElement('div');
square.classList.add('square');

let value = 4;

for (let i = 0; i < value; i++) {
    subSquares.appendChild(square.cloneNode(true));
}
for (let i = 0; i < value; i++) {
    squares.appendChild(subSquares.cloneNode(true));
}


const range = document.querySelector('#range');
const rangeInfo = document.querySelector('.range-info');
range.addEventListener('input', () => {
    subSquares.innerHTML = '';
    squares.innerHTML = '';
    value = range.value;
    rangeInfo.textContent = value +" x " + value;
    for (let i = 0; i < value; i++) {
        subSquares.appendChild(square.cloneNode(true));
    }
    for (let i = 0; i < value; i++) {
        squares.appendChild(subSquares.cloneNode(true));
    }
})


const brush = document.querySelector('.brush');
brush.addEventListener('click', () => {
    const gridElements = document.querySelectorAll('.square');
    gridElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.cssText = "background-color: " + document.querySelector('#color').value;
        })
    })
})

const eraser = document.querySelector('.eraser');

eraser.addEventListener('click', () => {
    const gridElements = document.querySelectorAll('.square');
    gridElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.cssText = "background-color: white";
        })
    })
})

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    const gridElements = document.querySelectorAll('.square');
    gridElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.cssText = "background-color: rgb("+Math.random()*255+"," +Math.random()*255+","+Math.random()*255+");";
        })
    })
})
