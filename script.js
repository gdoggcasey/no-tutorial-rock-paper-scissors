// Making Rock Paper Scissors vs the CPU
// The CPU needs to choose randomly between 3 options (rock, paper or scissors)
// We need to ask the user to input rock, paper or scissors
// We need to restrict user inputs to exact spelling
// We compare the two options and select a winner

const choices = ['rock', 'paper', 'scissors'];



function computerPlay() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function userPlay() {
    userSelection = prompt('Please choose either Rock, Paper, or Scissors.')
    userSelection.toLowerCase();
    return userSelection;
}

function playRound() {
    computerPlay();
    userPlay();
    if (userSelection === 'rock' && computerSelection === 'scissors') {
        console.log('User: Rock - CPU: Scissors --- User wins!');
    } else if (userSelection === 'rock' && computerSelection === 'paper') {
        console.log('User: Rock - CPU: Paper --- SPU wins!');
    } else if (userSelection === 'rock' && computerSelection === 'rock') {
        console.log('User: Rock - CPU: Rock --- Tie game!');
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
        console.log('User: Paper - CPU: Rock --- User wins!');
    } else if (userSelection === 'paper' && computerSelection === 'scissors') {
        console.log('User: Paper - CPU: Scissors --- CPU wins!');
    } else if (userSelection === 'paper' && computerSelection === 'paper') {
        console.log('User: Paper - CPU: Paper --- Tie game!');
    } else if (userSelection === 'scissors' && computerSelection === 'paper') {
        console.log('User: Scissors - CPU: Paper --- User wins!');
    } else if (userSelection === 'scissors' && computerSelection === 'rock') {
        console.log('User: Scissors - CPU: Rock --- CPU wins!');
    } else if (userSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('User: Scissors - CPU: Scissors --- Tie game!');
    } 
}
    

playRound();
