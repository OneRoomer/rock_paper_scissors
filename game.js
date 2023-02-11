
//Event Listener for all buttons in container
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, compChoice()));
    });
});

   /* //Player choice
    let playerProm = prompt("Choose wisely Rock, Paper or Scissor!");
    const playerChoice = playerProm.toString().toLowerCase();
    */

    //Computer choice
    function compChoice () {
    const computerValue = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * computerValue.length);
    const computerChoice = computerValue[randomChoice].toString();
    return computerChoice;
    }
    
    //Function call
    //console.log(playRound (playerChoice, computerChoice));


//Play game
function playRound (player, computer) {
    if (player === "rock" && computer === "scissor") {
        return("Player wins, Rock beats Scissor");
    }
    else if ( player === "paper" && computer === "rock") {
        return("Player wins, Paper beats Rock");
    }
    else if (player === "scissor" && computer == "paper") {
        return("Player wins, Scissor beats Paper");
    }
    else if (player === computer) {
        return("Draw! Well played!");
    }
    else {
        return("Computer wins! Try again!");
    }
}