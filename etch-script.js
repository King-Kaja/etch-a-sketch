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

    // Add color changing function to square
    square.addEventListener('click',function () {
        changeColor(square);
    });

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

// changes color of square based on current value of color input
function changeColor(gridSquare){

  const color = document.querySelector('#color');
  console.log(color.value);
  gridSquare.style.backgroundColor= color.value;
}

// Add UI for input
const button = document.querySelector('button');
const width = document.querySelector('#width');
const height = document.querySelector('#height');

button.addEventListener('click', () => {

  // Check if input is valid
  if(isNaN(width.value) || isNaN(height.value)){
    alert("Width and height must be a positive whole numbers" );
  }
  else if(width.value < 0 || height.value < 0 || width.value % 1 != 0 || height.value % 1 != 0){
    alert("Width and height must be a positive whole numbers" );
  }
  else{

    // Clear page of grid
    grid.innerHTML ="";
    // Call helper function to create grid
    setUpGrid(width.value, height.value);
  }
});
