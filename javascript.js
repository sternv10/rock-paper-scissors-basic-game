let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "TIE";

  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "WIN";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    result = "LOSE";
  }

  return result;
}

function updateScoreDisplay() {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.textContent = `YOU: ${playerScore}`;
  computerScoreElement.textContent = `COMPUTER: ${computerScore}`;
}

function endGame(message) {
  const victoryMessageElement = document.getElementById("victory-message");
  victoryMessageElement.textContent = message;

  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();

  setTimeout(function () {
    victoryMessageElement.textContent = "";
  }, 3000);
}

function play(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  if (result === "WIN") {
    playerScore++;
  } else if (result === "LOSE") {
    computerScore++;
  }

  updateScoreDisplay();

  if (playerScore === 5) {
    endGame("You won!");
  } else if (computerScore === 5) {
    endGame("You lost!");
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();

  const victoryMessageElement = document.getElementById("victory-message");
  victoryMessageElement.textContent = "";
}
