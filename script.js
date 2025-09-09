function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Rock, paper, or scissors?");
  return choice.toLowerCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // for (let game = 0; game < 5; game++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    switch (result) {
      case "draw":
        console.log(`Draw: you both chose ${humanSelection}.`);
        break;
      case "win":
        humanScore++;
        console.log(`You win: ${humanSelection} beats ${computerSelection}.`);
        break;
      case "lose":
        computerScore++;
        console.log(`You lose: ${computerSelection} beats ${humanSelection}.`);
        break;
    }
  // }

  if (humanScore > computerScore) {
    console.log(`You won the game! Your score: ${humanScore}, computer score: ${computerScore}`);
  } else {
    console.log(`You lost the game! Your score: ${humanScore}, computer score: ${computerScore}`);
  }
}

const div = document.querySelector("#results");
const btns = document.querySelectorAll("button");

for (const btn of btns) {
  btn.addEventListener("click", e => {
    humanChoice = e.target.textContent.toLowerCase();
    playRound(humanChoice, getComputerChoice());
  });
}
