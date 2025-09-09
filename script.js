function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * choices.length);
  return choices[num];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function increaseScore(roundResult, humanChoice, computerChoice) {
  switch (roundResult) {
    case "draw":
      return `Draw: you both chose ${humanChoice}. Your score: ${humanScore}. Computer score: ${computerScore}.`;
    case "win":
      humanScore++;
      return `You win: ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}. Computer score: ${computerScore}.`;
    case "lose":
      computerScore++;
      return `You lose: ${computerChoice} beats ${humanChoice}. Your score: ${humanScore}. Computer score: ${computerScore}.`;
  }
}

const resultsDiv = document.querySelector("#results");
const btns = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

for (const btn of btns) {
  btn.addEventListener("click", e => {
    if (humanScore < maxScore && computerScore < maxScore) {
      const humanChoice = e.target.textContent.toLowerCase();
      const computerChoice = getComputerChoice();
      const roundResult = playRound(humanChoice, computerChoice);
      resultsDiv.textContent = increaseScore(roundResult, humanChoice, computerChoice);
    } else {
      if (humanScore === maxScore) {
        resultsDiv.textContent = `You won! Final score: ${humanScore} to ${computerScore}.`;
      } else {
        resultsDiv.textContent = `You lost! Final score: ${humanScore} to ${computerScore}.`;
      }
    }
  });
}
