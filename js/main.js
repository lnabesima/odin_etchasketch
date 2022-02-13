const mainDiv = document.querySelector('.div-wrapper');

const createDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.style.cssText = 'width: 20px; height: 20px; border: 1px solid black';
  newDiv.classList.add('div-wrapper__block');
  mainDiv.appendChild(newDiv);
};

for (let i = 0; i < 256; i += 1) {
  createDiv();
}

const basicBlocks = document.querySelectorAll('.div-wrapper__block');
[...basicBlocks].forEach((block) => {
  block.addEventListener('mouseenter', () => block.classList.add('test'));
});
