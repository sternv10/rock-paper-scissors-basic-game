/*function getComputerChoice() {
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
  if (playerSelection === computerSelection) result = "TIE";

  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "WIN";
  }

  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    result = "LOSE";
  }

  return result;
}

function game() {
  console.log("Start of game!");

  const ROUNDS_TO_WIN = 5;
  let roundWin = 0;
  let roundLose = 0;

  while (roundWin < ROUNDS_TO_WIN && roundLose < ROUNDS_TO_WIN) {
    let playerSelection = prompt(
      "Enter rock, paper or scissors: "
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === "WIN") {
      roundWin++;
    }

    if (result === "LOSE") {
      roundLose++;
    }

    console.log(result + "! You: " + roundWin + " " + "Computer: " + roundLose);

    if (roundLose === 5) {
      console.log("You lost!");
    }

    else if (roundWin === 5) {
      console.log("You Won!");
    }
  }

  console.log("End of game!");
}

game(); */
