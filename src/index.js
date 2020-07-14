import "./styles.scss";
const container = document.querySelector(".container");
const contentColor = document.querySelector(".content__color");
const btn = document.querySelector(".content__button");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "e", "f"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex?.length);
};

const getRandomColor = () => {
  const MAX_LENGTH_COLOR = 6;
  let color = "";
  for (let i = 0; i < MAX_LENGTH_COLOR; i++) {
    const indexRandom = getRandomNumber();
    color += hex[indexRandom];
  }
  return `#${color}`;
};

const setBackground = bg => {
  container.style.backgroundColor = bg;
};

const setColorDescription = desc => {
  contentColor.textContent = desc;
};

const render = () => {
  const color = getRandomColor();
  setBackground(color);
  setColorDescription(color);
};

render();

btn.addEventListener("click", () => render());
