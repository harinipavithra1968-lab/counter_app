let count = 0;

const counterValue = document.querySelector("#counterValue");

export function increase() {
  count++;
  counterValue.textContent = count;
}

export function decrease() {
  count--;
  counterValue.textContent = count;
}

export function reset() {
  count = 0;
  counterValue.textContent = count;
}