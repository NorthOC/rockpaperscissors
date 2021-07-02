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
    for(let i = 0; i <= 20; i++){
        if (playerScore == 5){
            console.log("You Win!")
            break
        } else if (aiScore == 5) {
            console.log("AI rules supreme!")
            break
        } else {
            playerSelection = prompt(`Rock, paper, scissors. Round ${i + 1}, fight!`).toLowerCase();
            while (options.includes(playerSelection) !== true){
                playerSelection = prompt("Try again sucker!").toLowerCase();
            }
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            //eye candy
            console.log(`You picked ${playerSelection}! Your score ${playerScore}`);
            console.log(`AI picked ${computerSelection}! AI score ${aiScore}`);

            continue
        }
    }

}
game();