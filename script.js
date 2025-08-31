let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3)
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice () {
  const choice = prompt("Rock, paper, or scissors?");
  return choice.toLowerCase();
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Draw: you both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win: ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose: ${computerChoice} beats ${humanChoice}.`;
  }
}
