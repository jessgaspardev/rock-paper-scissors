// VARIABLES

let humanScore = 0;
let computerScore = 0;

const results = document.createElement("div");
results.classList.add("results");
results.style.fontSize = "1.2rem";


const game = document.querySelector(".game");
const humanChoiceResult = document.createElement("p");
const computerChoiceResult = document.createElement("p");
const humanScoreResult = document.createElement("p");
const computerScoreResult = document.createElement("p");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


// Gets a computer choice by randomizing 3 numbers and attributing each number to a selection
function getComputerChoice() {
    let computerChoice = (Math.round(Math.random() * 2) + 1);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

// Game logic
function playRound(humanChoice, computerChoice) {
    game.appendChild(results);

    if (humanChoice === "rock" && computerChoice === "paper") {
        results.textContent = "Paper beats rock";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "Rock beats scissors";
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        results.textContent = "Paper beats rock";
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        results.textContent = "Scissors beats paper";
        computerScore++; 
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "Rock beats scissors";
        computerScore++; 
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "Scissors beats paper";
        humanScore++; 
    } else if (humanChoice === computerChoice) {
        results.textContent = "It's a tie";
    } 

    //Display the running score
    results.appendChild(humanChoiceResult);
    results.appendChild(computerChoiceResult);
    humanChoiceResult.textContent = `Player Choice = ${humanChoice}`;
    computerChoiceResult.textContent = `Computer Choice = ${computerChoice}`;
    results.appendChild(humanScoreResult);
    results.appendChild(computerScoreResult);
    humanScoreResult.textContent = `Player Score = ${humanScore}`;
    computerScoreResult.textContent = `Computer Score = ${computerScore}`;

    //Get winner once player or computer get 5 points
    if (humanScore == 5) {
        humanScoreResult.textContent = `Player Score = ${humanScore} - Player wins!!`
        endGame();
    } else if (computerScore == 5) {
        computerScoreResult.textContent = `Computer Score = ${computerScore} - Computer wins!!`
        endGame();
    }

    //Disable buttons once the game is over and add option to restart
    function endGame() {
        rockBtn.disabled = "true";
        paperBtn.disabled = "true";
        scissorsBtn.disabled = "true";

        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Play Again";
        results.appendChild(restartBtn);
        restartBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            rockBtn.disabled = false;
            paperBtn.disabled = false;
            scissorsBtn.disabled = false;
            results.textContent = "";
            humanChoiceResult.textContent = "";
            computerChoiceResult.textContent = "";
            humanScoreResult.textContent = "";
            computerScoreResult.textContent = "";
            restartBtn.remove();
        })
    }
} 


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


