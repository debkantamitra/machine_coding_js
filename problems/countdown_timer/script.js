(function () {
  const hour = document.querySelector(".hour");
  const minutes = document.querySelector(".minutes");
  const secs = document.querySelector(".secs");

  const startBtn = document.querySelector(".btn--start");
  const stopBtn = document.querySelector(".btn--stop");
  const resetBtn = document.querySelector(".btn--reset");

  let countdownTimer = null;
  let interval = null;

  startBtn.addEventListener("click", () => {
    if (!hour.value && !minutes.value && !secs.value) return;

    const countdownTimerSecs =
      hour.value * 3600 + minutes.value * 60 + secs.value * 1;

    startInterval(countdownTimerSecs);
  });

  stopBtn.addEventListener("click", () => {
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";

    clearInterval(interval);
  });

  resetBtn.addEventListener("click", () => {
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";

    hour.value = "";
    minutes.value = "";
    secs.value = "";

    countdownTimer = null;
    clearInterval(interval);
  });
})();

function calculateCountdown(countdownTimerSecs = 0) {
  const hourLocal = Math.floor(countdownTimerSecs / 3600);
  const minutesLocal = Math.floor((countdownTimerSecs % 3600) / 60);
  const secsLocal = countdownTimerSecs - (hourLocal * 3600 + minutesLocal * 60);

  hour.value = hourLocal < 10 ? `0${hourLocal}` : hourLocal;
  minutes.value = minutesLocal < 10 ? `0${minutesLocal}` : minutesLocal;
  secs.value = secsLocal < 10 ? `0${secsLocal}` : secsLocal;

  return countdownTimerSecs;
}

function startInterval(countdownTimerSecs) {
  startBtn.style.display = "none";
  stopBtn.style.display = "initial";

  interval = setInterval(() => {
    countdownTimer = calculateCountdown(countdownTimerSecs--);

    if (countdownTimer === 0) {
      startBtn.style.display = "initial";
      stopBtn.style.display = "none";

      clearInterval(interval);
    }
  }, 1000);
}
