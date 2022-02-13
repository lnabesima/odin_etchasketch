const mainDiv = document.querySelector('.div-wrapper');

// this function create the basic element of the board
const createDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.style.cssText = 'width: 20px; height: 20px; border: 1px solid black';
  newDiv.classList.add('div-wrapper__block');
  mainDiv.appendChild(newDiv);
};

// this loop create all the blocks needed to populate the board
// later on the counter limiter will be changed to n^2
// where n is the number of blocks the user inputs
for (let i = 0; i < 256; i += 1) {
  createDiv();
}

// paint the blocks on mouseenter
const basicBlocks = document.querySelectorAll('.div-wrapper__block');
[...basicBlocks].forEach((block) => {
  block.addEventListener('mouseenter', () => block.classList.add('test'));
});
