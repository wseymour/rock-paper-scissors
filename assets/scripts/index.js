const plays = {
    "Rock": 0,
    "Paper": 1,
    "Scissors": 2
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
        return "It's a Draw!";
    } else if ((plays[playerSelection] + 1) % 3 === plays[computerSelection]) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
}

function game(){
    playerWins = 0;
    compWins = 0;

    for (i = 0; i < 5; i++) {
        let guess = prompt("Choose 'Rock', 'Paper', or 'Scissors': ");

        rockPaperScissors()
    }
}