const plays = {
    "Rock": 0,
    "Paper": 1,
    "Scissors": 2
}

const wins = {
    "player": 0,
    "comp": 0,
    "draw": 0
}

function convertGuess(guess) {
    if (guess === 0) {
        return "Rock";
    } else if (guess === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function computerPlay() {
    let generatedNum = Math.floor(Math.random() * 3);
    
    return convertGuess(generatedNum);
}
  
function rockPaperScissors(playerSelection, computerSelection) {
    if (plays[playerSelection] == plays[computerSelection]) {
        wins.draw += 1;
        score.textContent = "It's a Draw!";
    } else if ((plays[playerSelection] + 1) % 3 === plays[computerSelection]) {
        wins.comp += 1;
        score.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        wins.player += 1;
        score.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

//TODO: commented out until refactored
//------------------------------------
// const printWinner = function() {
//     if (wins.player > wins.comp) {
//         console.log(wins);
//         return "You win!";
//     } else if (wins.player < wins.comp) {
//         console.log(wins);
//         return "Computer wins!";
//     } else {
//         console.log(wins);
//         return "It's a draw!";
//     }
// }

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const scoreDiv = document.getElementById("score");

rockBtn.addEventListener('click', function () {rockPaperScissors('Rock', computerPlay() )})
paperBtn.addEventListener('click', function () {rockPaperScissors('Paper', computerPlay() )})
scissorsBtn.addEventListener('click', function () {rockPaperScissors('Scissors', computerPlay() )})

