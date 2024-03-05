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



const subSquaresClass = document.querySelectorAll('.subSquares');


const range = document.querySelector('#range');
const rangeInfo = document.querySelector('.range-info');
range.addEventListener('input', () => {
    subSquares.innerHTML = '';
    squares.innerHTML = '';
    value = range.value;
    rangeInfo.textContent = value +" x " + value;
    for (let i = 0; i < value; i++) {
        subSquares.appendChild(square.cloneNode(true));
        console.log('subsqaures -'+i);
    }
    for (let i = 0; i < value; i++) {
        squares.appendChild(subSquares.cloneNode(true));
    }
})
