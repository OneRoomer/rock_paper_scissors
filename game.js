
//Event Listener for all buttons in container
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, compChoice());
    });
});

function displayResult (text) {
    const resContainer = document.querySelector('#result');
    resContainer.textContent = text;
};


//Play game
function playRound(player, computer) {
    if (player === "rock" && computer === "scissor") {
        displayResult("Player wins, Rock beats Scissor");
    }
    else if (player === "paper" && computer === "rock") {
        displayResult("Player wins, Paper beats Rock");
    }
    else if (player === "scissor" && computer == "paper") {
        displayResult("Player wins, Scissor beats Paper")
    }
    else if (player === computer) {
        displayResult("Draw! Well played!");
    }
    else {
        displayResult("Computer wins! Try again!");
    }
}

//Computer choice
function compChoice() {
    const computerValue = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * computerValue.length);
    const computerChoice = computerValue[randomChoice].toString();
    return computerChoice;
}

