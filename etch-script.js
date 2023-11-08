const grid = document.querySelector('.grid');

function setUpGrid(width, height){
  squares = width * height;

  ratio = width/height;
  gridWidth = 750 * ratio;
  gridHeight = 750 / ratio;
  grid.setAttribute('style', `width: ${gridWidth}px; height: ${gridHeight}px;`);


  console.log(squares);
  for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    if(width >= height){
      square.setAttribute('style', `height: ${gridWidth/width}px; width: ${gridWidth/width}px;`);
    }
    else{
      square.setAttribute('style', `height: ${gridHeight/height}px; width: ${gridHeight/height}px;`);
    }

    grid.appendChild(square);
  }
}
setUpGrid(16,16);
