const plays = {
    "Rock": 0,
    "Paper": 1,
    "Scissors": 2
}

const wins = {
    "player": 0,
    "comp": 0
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
        wins.comp += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        wins.player += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function printWinner() {
    "Player has ${wins.player} wins. Computer has ${wins.comp} wins."
    if (wins.player > wins.comp) {
        return "You win!";
    } else if (wins.player < wins.comp) {
        return "Computer wins!";
    } else {
        return "It's a draw!";
    }
}

function game(){
    for (i = 0; i < 5; i++) {
        let guess = prompt("Choose 'Rock', 'Paper', or 'Scissors': ");
//TODO - get input working and scrub for use.
        rockPaperScissors()
    }
}

game();
console.log(printWinner())

