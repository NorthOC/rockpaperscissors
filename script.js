//const variables

const ROCK = "rock";
const PAPER = "paper";
const SCRISSORS = "scissors"
const options = [ROCK, PAPER, SCRISSORS];
const rockWin = "You win! Rock breaks scissors.";
const rockLose = "You lose! Paper covers rock."
const paperWin = "You win! Paper covers rock.";
const paperLose = "You lose! Scissors cut paper."
const sciWin = "You win! Scissors cut paper.";
const sciLose = "You lose! Rock breaks scissors."

//func to randomize computer choice between rock,paper,scissors
function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}
//who wins or loses based on pick
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return console.log(`IT'S A TIE!`);

    } else if (playerSelection == ROCK && computerSelection == PAPER){
        return console.log(rockLose);

    } else if (playerSelection == ROCK && computerSelection == SCRISSORS){
        return console.log(rockWin);

    } else if (playerSelection == PAPER && computerSelection == ROCK){
        return console.log(paperWin);

    } else if (playerSelection == PAPER && computerSelection == SCRISSORS){
        return console.log(paperLose);

    } else if (playerSelection == SCRISSORS && computerSelection == ROCK){
        return console.log(sciLose);
    } else {
        return console.log(sciWin);
    }
}
//player picking the choice
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
while (options.includes(playerSelection) !== true){
    playerSelection = prompt("Try again sucker!")
}
//running computer pick
let computerSelection = computerPlay();

//eye candy in console
console.log(`You picked ${playerSelection}!`);
console.log(`AI picked ${computerSelection}!`);

// function for a number of rounds
function game(){
    for(let i = 0; i <= 9; ){
        playRound(playerSelection, computerSelection);
    }

}