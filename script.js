let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++; 
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore++; 
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        humanScore++; 
    } else if (humanChoice === computerChoice) {
        console.log ("It's a tie!")
    } 
} 


function playGame () {
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

playGame();



