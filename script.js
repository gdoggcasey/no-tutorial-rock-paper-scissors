// Making Rock Paper Scissors vs the CPU
// The CPU needs to choose randomly between 3 options (rock, paper or scissors)
// We need to ask the user to input rock, paper or scissors
// We need to restrict user inputs to exact spelling
// We compare the two options and select a winner

const choices = ['rock', 'paper', 'scissors'];
const results = playRound();


function computerPlay() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function userPlay() {
    userSelection = prompt('Please choose either Rock, Paper, or Scissors.')
    return userSelection;
}

function playRound(computerSelection, userSelection) {
    computerPlay();
    userPlay();
    return results;
}




//console.log(playRound());

