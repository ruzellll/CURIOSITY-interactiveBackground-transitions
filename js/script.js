const color = {
    red: "#ff160c",
    orange: "#fe5000",
    yellow: "#ffff00",
    green: "#66ff00",
    blue: "#183efa",
    indigo: "#6e00ff",
    violet: "#df00ff",
  };

  let currentColor = "#ff160c";

function handleMouseOver(box) {
    if (box.classList.contains("hover")) {
      box.classList.remove("hover");
      box.classList.remove("hovered");
    }
    box.classList.add("hover");
    box.style.backgroundColor = currentColor;
    box.style.boxShadow = `0px 0px 15px ${currentColor}`;

    let main = document.querySelector('main');

    main.style.backgroundColor = currentColor;
  }

  function handleMouseOut(box) {
    box.classList.add("hovered");
    box.style.boxShadow = `none`;
  }

const numCols = Math.floor(window.innerWidth / 45);
const numRows = Math.floor(window.innerHeight / 45);

const numBoxes = numCols * numRows;

for (let i = 0; i < numBoxes; i++) {
  const box = document.createElement('div');

  box.classList.add('box');
  box.addEventListener('mouseover', () => handleMouseOver(box));
  box.addEventListener('mouseout', () => handleMouseOut(box));

  let colorIndex = 1;

  function changeColor() {
    const colors = Object.values(color);
    if (colorIndex >= 7) {
      colorIndex = 0;
    }
    
    currentColor = colors[colorIndex];
    colorIndex++;

    main.style.backgroundColor = currentColor;
    main.style.boxShadow = `0px 0px 15px ${currentColor}`;
    logo.style.color = currentColor;
    logo.style.textShadow = `0px 0px 10px ${currentColor}`;

    designBox.style.backgroundColor = currentColor;
    designBox.style.boxShadow = `0px 0px 10px ${currentColor}`;
    designText.style.color = currentColor;
    designText.style.textShadow = `0px 0px 10px ${currentColor}`;

  }
  document.body.appendChild(box);
}

const main = document.querySelector('main');
const logo = document.querySelector('p');
const designBox = document.querySelector('section');
const designText = document.getElementById('design-text');

main.addEventListener('click', () => changeColor());

const author = document.querySelector('a');
const slide = document.querySelector('area'); //?

author.addEventListener('mouseover', () => handleMouseOverAuthor(author));
author.addEventListener('mouseout', () => handleMouseOutAuthor(author));

function handleMouseOverAuthor(author) {
  author.style.color = currentColor;
  author.style.fontWeight = 'normal';
  author.style.textShadow = `0px 0px 10px ${currentColor}`;
  designText.style.color = 'black';
  designText.style.fontWeight = 'bold';
  designText.style.textShadow = `none`;
  slideRight();
  }

  function handleMouseOutAuthor(author) {
    author.style.color = 'black';
    author.style.fontWeight = 'bold';
    author.style.textShadow = `none`;
    designText.style.color = currentColor;
    designText.style.fontWeight = 'normal';
    designText.style.textShadow = `0px 0px 10px ${currentColor}`;
    slideLeft()
  }

  function slideRight(){
    slide.style.transform = 'translate(122%, 0%)';
    slide.style.width = '48px';
  }

  function slideLeft(){
    slide.style.transform = 'translate(0%, 0%)';
    slide.style.width = '60px';
  }

  // setInterval(() => {
  //   changeColor();
  // }, 2000);