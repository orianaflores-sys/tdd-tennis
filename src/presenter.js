import Tennis from "./tennis.js";

let tennis = new Tennis();

const scoreDiv = document.querySelector("#score");
const p1Btn = document.querySelector("#p1");
const p2Btn = document.querySelector("#p2");
const resetBtn = document.querySelector("#reset");

function render() {
  scoreDiv.textContent = tennis.score();
}

p1Btn.addEventListener("click", () => {
  tennis.player1Scores();
  render();
});

p2Btn.addEventListener("click", () => {
  tennis.player2Scores();
  render();
});

resetBtn.addEventListener("click", () => {
  tennis = new Tennis();
  render();
});

render();