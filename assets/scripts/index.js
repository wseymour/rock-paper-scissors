const plays = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

function computerPlay() {
    let generatedNum = Math.floor(Math.random() * 3) + 1;

    return plays[generatedNum]

    }

// function rockPaperScissors(computerSelection, playerSelectiuon) {
//     if (computerSelection == 
// }
