let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.querySelector('.display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
  if (isRunning) {
    stop();
  } else {
    start();
  }
});

resetButton.addEventListener('click', reset);

function start() {
  isRunning = true;
  startStopButton.textContent = 'Stop';
  startTime = Date.now() - elapsedTime;
  timer = setInterval(updateDisplay, 100);
}

function stop() {
  isRunning = false;
  startStopButton.textContent = 'Start';
  elapsedTime = Date.now() - startTime;
  clearInterval(timer);
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  const time = elapsedTime + (isRunning ? Date.now() - startTime : 0);
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 100);

  display.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

