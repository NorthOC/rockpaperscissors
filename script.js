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
//who wins or loses based on pick and adding points
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
     console.log(`IT'S A TIE!`);

    } else if (playerSelection == ROCK && computerSelection == PAPER){
        aiScore += 1;
     console.log(rockLose);

    } else if (playerSelection == ROCK && computerSelection == SCRISSORS){
        playerScore += 1;
     console.log(rockWin);

    } else if (playerSelection == PAPER && computerSelection == ROCK){
        playerScore += 1;
     console.log(paperWin);

    } else if (playerSelection == PAPER && computerSelection == SCRISSORS){
        aiScore += 1;
     console.log(paperLose);

    } else if (playerSelection == SCRISSORS && computerSelection == ROCK){
        aiScore += 1;
     console.log(sciLose);
    } else {
        playerScore += 1;
     console.log(sciWin);
    }
}
//defining choice variables
let playerSelection;
let computerSelection;

// function for a number of rounds
let playerScore = 0;
let aiScore = 0;

function game(){
        if (playerScore == 5){
            ending("You Win!")
        } else if (aiScore == 5) {
            ending("AI rules supreme!")
        } else {
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        }
    
}

function ending(text){
    const message = document.querySelector("#ending");
    message.textContent = text;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.style.cssText = "display: none;"
    })
}
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scibutton = document.querySelector("#scissors");
const pick = function(e){
    playerSelection = e.target.value;
    game()
}

rockbutton.addEventListener("click", pick)
paperbutton.addEventListener("click", pick)
scibutton.addEventListener("click", pick)