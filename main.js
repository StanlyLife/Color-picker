//selectors
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;
//functions

function generateHex() {
  /*
    const letters = "#012356789ABCDEF";
    let hash = "#";
    for (let i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;
  */
  const hexColor = chroma.random();
  return hexColor;
}

function randomizeColor() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;

    /*contrast check*/
    getTextContrast(randomColor, hexText);
  });
}

function getTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "#333";
  } else {
    text.style.color = "#fff";
  }
}

randomizeColor();
