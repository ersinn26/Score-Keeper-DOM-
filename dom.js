const tenisPlayer1 = document.querySelector(".btn-player1");
const tenisPlayer2 = document.querySelector(".btn-player2");
const tenisReset = document.querySelector(".btn-reset");
const score1 = document.querySelector(".p-1");
const score2 = document.querySelector(".p-2");
const scoreToWin = document.querySelector(".score-to-win");

tenisPlayer1.addEventListener("click", () => {
  score1.textContent++;
  if (score1.textContent == scoreToWin.value) {
    score1.style.color = "green";
    score2.style.color = "red";
    tenisPlayer1.style.opacity = 0.5;
    tenisPlayer2.style.opacity = 0.5;
  }
});
tenisPlayer2.addEventListener("click", () => {
  score2.textContent++;
  if (score2.textContent == scoreToWin.value) {
    score1.style.color = "red";
    score2.style.color = "green";
    tenisPlayer2.style.opacity = 0.5;
    tenisPlayer1.style.opacity = 0.5;
  }
});

tenisReset.addEventListener("click", () => {
  score1.textContent = 0;
  score2.textContent = 0;
  tenisPlayer1.style.color = "black";
  tenisPlayer2.style.color = "black";
  score1.style.color = "black";
  score2.style.color = "black";
  tenisPlayer1.style.opacity = 1;
  tenisPlayer2.style.opacity = 1;
});

scoreToWin.addEventListener("change", () => {
  if (scoreToWin.value < 1) {
    scoreToWin.value = 1;
  } else if (scoreToWin.value > 10) {
    scoreToWin.value = 10;
  } else {
    scoreToWin.value = scoreToWin.value;
  }
});