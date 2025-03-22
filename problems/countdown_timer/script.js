(function () {
  let countdownTimer = null;
  let interval = null;

  const hour = document.querySelector(".hour");
  const minutes = document.querySelector(".minutes");
  const secs = document.querySelector(".secs");

  const startBtn = document.querySelector(".btn--start");
  const stopBtn = document.querySelector(".btn--stop");
  const resetBtn = document.querySelector(".btn--reset");

  const inputFields = [hour, minutes, secs];
  const btns = [startBtn, resetBtn];

  function toggleBtnStates(disable = false) {
    btns.forEach((btn) => {
      if (!disable) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });
  }

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", () => {
      console.log(inputField.value);

      if (parseInt(inputField.value)) {
        toggleBtnStates(false);
      } else {
        toggleBtnStates(true);
      }
    });
  });

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

  function calculateCountdown(countdownTimerSecs = 0) {
    const hourLocal = Math.floor(countdownTimerSecs / 3600);
    const minutesLocal = Math.floor((countdownTimerSecs % 3600) / 60);
    const secsLocal =
      countdownTimerSecs - (hourLocal * 3600 + minutesLocal * 60);

    hour.value = hourLocal < 10 ? `0${hourLocal}` : hourLocal;
    minutes.value = minutesLocal < 10 ? `0${minutesLocal}` : minutesLocal;
    secs.value = secsLocal < 10 ? `0${secsLocal}` : secsLocal;

    return countdownTimerSecs;
  }

  function startInterval(countdownTimerSecs) {
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    interval = setInterval(() => {
      const countdownTimer = calculateCountdown(countdownTimerSecs--);

      if (countdownTimer === 0) {
        startBtn.style.display = "initial";
        stopBtn.style.display = "none";

        clearInterval(interval);
        toggleBtnStates(true);
      }
    }, 1000);
  }
})();
