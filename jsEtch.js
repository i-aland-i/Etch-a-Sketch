const square = document.querySelector('.squares');

const userInput = 10;

makeGrid(userInput);

function makeGrid(x) {
    let cellShape = 600 / x + 'px';
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < x; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellShape;
            cell.style.height = cellShape;
            row.appendChild(cell);
        }
        square.appendChild(row);
    }
}
