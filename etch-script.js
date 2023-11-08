const grid = document.querySelector('.grid');

function setUpGrid(width, height){

  // Total number of squares
  squares = width * height;


  // 750px are the base dimensions of the grid
  ratio = width/height;
  gridWidth = 750 * ratio;
  gridHeight = 750 / ratio;

  // Set width and height of grid in terms of pixels
  grid.setAttribute('style', `width: ${gridWidth}px; height: ${gridHeight}px;`);


  // Add every grid square to grid
  for (let i = 0; i < squares; i++) {

    const square = document.createElement('div');
    square.classList.add('grid-square');

    // Dimensions of grid square depend on the lowest value dimension of the grid
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
