
function startCountdown(seconds) {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = seconds;
    const timer = setInterval(() => {
      seconds--;
      timerElement.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        timerElement.textContent = '0';
        showWinnerAlert();
      }
    }, 1000);
  }
  
function showWinnerAlert() {
    alert('Вы победили в конкурсе!');
  }
startCountdown(59);