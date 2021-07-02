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

function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

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
  const playerSelection = options[1];
  let computerSelection = computerPlay();
  console.log(`You picked ${playerSelection}!`);
  console.log(`AI picked ${computerSelection}!`);
  playRound(playerSelection, computerSelection);