//Player choice
let playerProm = prompt("Choose wisely Rock, Paper or Scissor!");
const playerChoice = playerProm.toString().toLowerCase();

//Computer choice
const computerValue = ["rock", "paper", "scissor"];
const randomChoice = Math.floor(Math.random() * computerValue.length);
const computerChoice = computerValue[randomChoice].toString();

console.log(playerChoice, computerChoice );


//Play game
function playRound (player, computer) {
    if (player === "rock" && computer === "scissor") {
        console.log("Player wins, Rock beats Scissor");
    }
    else if ( player === "paper" && computer === "rock") {
        console.log("Player wins, Paper beats Rock");
    }
    else if (player === "scissor" && computer == "paper") {
        console.log("Player wins, Scissor beats Paper");
    }
    else if (player === computer) {
        console.log("Draw! Well played!");
    }
    else {
        console.log("Computer wins! Try again!");
    }
}

playRound (playerChoice, computerChoice);