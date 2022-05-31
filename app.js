const rock = document
  .getElementById('rockBtn')
  .addEventListener('click', () => compareChoices('rock'));
const paper = document
  .getElementById('paperBtn')
  .addEventListener('click', () => compareChoices('paper'));
const scissors = document
  .getElementById('scissorsBtn')
  .addEventListener('click', () => compareChoices('scissors'));
//201 w 152 h
const result = document.getElementById('winner');

let userScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');

const reset = document
  .getElementById('reset')
  .addEventListener('click', resetGame);

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function compareChoices(userChoice) {
  const computerChoice = getComputerChoice();
  switch (computerChoice + userChoice) {
    case 'paperscissors':
    case 'rockpaper':
    case 'scissorsrock':
      computerChoiceDisplay.textContent =
        'The computer chose ' + computerChoice;
      userChoiceDisplay.textContent = 'You chose ' + userChoice;
      result.textContent = 'You Win';
      userScore++;

      playerScoreDisplay.textContent = 'Player score ' + userScore;
      break;
    case 'scissorspaper':
    case 'paperrock':
    case 'rockscissors':
      computerChoiceDisplay.textContent =
        'The computer chose ' + computerChoice;
      userChoiceDisplay.textContent = 'You chose ' + userChoice;
      result.textContent = 'You Lose';
      computerScore++;
      computerScoreDisplay.textContent = 'Computer score ' + computerScore;

      break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      computerChoiceDisplay.textContent =
        'The computer chose ' + computerChoice;
      userChoiceDisplay.textContent = 'You chose ' + userChoice;
      result.textContent = "*Gasp* \nIt's a Tie!";
      break;
  }
}

function resetGame() {
  computerChoiceDisplay.innerText = ' ';
  userChoiceDisplay.innerText = ' ';
  result.innerText = ' ';
  playerScoreDisplay.innerText = '';
  computerScoreDisplay.innerText = '';
}
