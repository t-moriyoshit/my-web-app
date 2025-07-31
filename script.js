let score = 0;
let timeLeft = 10;
let timer;

const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const clickButton = document.getElementById("click-button");
const startButton = document.getElementById("start-button");

clickButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

startButton.addEventListener("click", () => {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  clickButton.disabled = false;
  message.textContent = "スタート！クリックして！";
  startButton.disabled = true;

  timer = setInterval(() => {
    timeLeft--;
    message.textContent = `残り ${timeLeft} 秒`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      clickButton.disabled = true;
      startButton.disabled = false;
      message.textContent = `終了！あなたのスコアは ${score} 回です！`;
    }
  }, 1000);
});
