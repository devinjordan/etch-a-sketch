const easel = document.querySelector('#easel');

function makeGrid (size) {
  for (i = 0; i < (size**2); i++) {
    let cell = document.createElement('div');
    easel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    easel.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    easel.insertAdjacentElement('beforeend', cell);
    // cell.style.border = '1px solid rgb(239, 219, 192)';
    cell.addEventListener('mouseover', function () {
      cell.style.backgroundColor = 'gray';
    });
    easel.appendChild(cell).className = 'easel-unit';

  };
};

makeGrid(16);