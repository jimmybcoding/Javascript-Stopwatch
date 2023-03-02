const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let secs = 0;
let mins = 0;
let hours = 0;
let running;

const stopwatch = () => {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hours++;
    }
  }
  display.innerHTML = `${
    (hours < 10 ? "0" + hours : hours) +
    (mins < 10 ? ":0" + mins : ":" + mins) +
    (secs < 10 ? ":0" + secs : ":" + secs)
  }`;
};

startBtn.addEventListener("click", () => {
  clearInterval(running);
  running = setInterval(stopwatch, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(running);
});

resetBtn.addEventListener("click", () => {
  clearInterval(running);
  display.textContent = `00:00:00`;
  secs = 0;
  mins = 0;
  hours = 0;
});
