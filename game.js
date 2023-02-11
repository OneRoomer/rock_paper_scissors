let playerScore = 0;
let computerScore = 0;

//Event Listener for all buttons in container
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playRound(button.id, compChoice());
        displayScore(playerScore, computerScore);

    });
});

function displayResult(text) {
    const resContainer = document.querySelector('#result');
    resContainer.textContent = text;
};

function displayScore(scorePlayer, scoreComputer) {
    const scoreContainer = document.querySelector('#score');
    scoreContainer.textContent = "Player " + scorePlayer + " : " + "Computer " + scoreComputer;
}


//Play game
function playRound(player, computer) {
    if (player === "rock" && computer === "scissor") {
        displayResult("Player wins, Rock beats Scissor");
        playerScore += 1;
        checkScore();
    }
    else if (player === "paper" && computer === "rock") {
        displayResult("Player wins, Paper beats Rock");
        playerScore += 1;
        checkScore();
    }
    else if (player === "scissor" && computer == "paper") {
        displayResult("Player wins, Scissor beats Paper");
        playerScore += 1;
        checkScore();
    }
    else if (player === computer) {
        displayResult("Draw! Well played!");
        checkScore();
    }
    else {
        displayResult("Computer wins! Try again!");
        computerScore += 1;
        checkScore();
    }
}

//Computer choice
function compChoice() {
    const computerValue = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * computerValue.length);
    const computerChoice = computerValue[randomChoice].toString();
    return computerChoice;
}

//Check score if needed reset
function checkScore() {
    if (playerScore >= 5 || computerScore >= 5) {
        const winnerContainer = document.querySelector('#winner');
        winnerContainer.textContent = "Congratulations to the winner!"
        playerScore = 0;
        computerScore = 0;
    }
}

