import "./style.css";

let count = 0;

document.querySelector("#app").innerHTML = `
  <div class="counter-card">
    <h1>Counter App</h1>

    <div id="counterValue">0</div>

    <div class="buttons">
      <button id="decreaseBtn">−</button>
      <button id="resetBtn">Reset</button>
      <button id="increaseBtn">+</button>
    </div>
  </div>
`;

const counterValue = document.querySelector("#counterValue");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const increaseBtn = document.querySelector("#increaseBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});