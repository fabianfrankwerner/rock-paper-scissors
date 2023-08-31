function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playerSelection = prompt("Rock, Paper or Scissors? Choose wisely: ").toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("You win! Rock beats Scissors.");
            location.reload();
            return;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            alert("You lose! Rock beats Scissors.");
            location.reload();
            return;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("You win! Scissors beats Paper.");
            location.reload();
            return;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            alert("You lose! Scissors beats Paper.");
            location.reload();
            return;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("You win! Paper beats Rock.");
            location.reload();
            return;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            alert("You lose! Paper beats Rock.");
            location.reload();
            return;
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            alert("Tie! Rock ties Rock.");
            location.reload();
            return;
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            alert("Tie! Paper ties Paper.");
            location.reload();
            return;
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            alert("Tie! Scissors ties Scissors.");
            location.reload();
            return;
        } 
    } else {
        alert("Please choose rock, paper or scissors!");
        location.reload();
        return;
    }
}
playRound(playerSelection, computerSelection);