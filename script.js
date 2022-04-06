// Making Rock Paper Scissors vs the CPU
// The CPU needs to choose randomly between 3 options (rock, paper or scissors)
// We need to ask the user to input rock, paper or scissors
// We need to restrict user inputs to exact spelling
// We compare the two options and select a winner

const choices = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();
``
function computerPlay() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
}


function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Rock loses to Paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Paper loses to Scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Scissors loses to Rock!';
    } else {
        return 'Tie game! You chose the same option as the Computer!';
    }
}       

const playerSelection = 'rock';

console.log(playRound(playerSelection, computerSelection));
