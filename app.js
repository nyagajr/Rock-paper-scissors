// 'use strict';

let computerScore = 0;
let playerScore = 0;

let roundsCounter = 1;

function computerPlay() {
  let selection = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * 3);
  return selection[randomInt];
}

function playerPlay(enter) {
  let selection = enter.target.value;
  return selection;
}

function setRoundResult(str) {
  const result = document.querySelector('#result');
  result.setAttribute('style', 'white-space: pre;');
  result.textContent = str;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `Tie! there is no winner for this round, You selected ${playerSelection} and computer selected ${computerSelection}`;
  }
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection.toLowerCase() === 'scissors') {
      playerScore++;
      return `Computer selected scissors \n You won this round! ${playerSelection} beats ${computerSelection}`;

    }

    if (computerSelection.toLowerCase() === 'paper') {
      computerScore++;
      return `Computer selected paper \n You lose this round! ${computerSelection} beats ${playerSelection}`;

    }

  }

  if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection.toLowerCase() === 'rock') {
      playerScore++;
      return `Computer selected rock \n You win this round! ${playerSelection} beats ${computerSelection}`;

    }

    if (computerSelection.toLowerCase() === 'scissors') {
      computerScore++;
      return `Computer selected scissors \n You lose this round! ${computerSelection} beats ${playerSelection}`;

    }

  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection.toLowerCase() === 'paper') {
      playerScore++;
      return `Computer selected paper \n You win this round! ${playerSelection} beats ${computerSelection}`;

    }

    if (computerSelection.toLowerCase() === 'rock') {
      computerScore++;
      return `Computer selected rock \n You lose this round! ${computerSelection} beats ${playerSelection}`;

    }

  }

}

function Winner() {
  if (playerScore > computerScore) {
    return `Congratulations You have won, Your score is ${playerScore} and computer score is ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `computer has won, Computer score is ${computerScore} and your score is ${playerScore}`;
  } else {
    return `There is no winner, Computer score is ${computerScore} and your score is ${playerScore}`;
  }
}


const game_buttons = Array.from(document.querySelectorAll('button[data-selection]'));
const reset_button = document.querySelector('#reset_button');


function reset() {
  computerScore = 0;
  playerScore = 0;
  roundsCounter = 1;
  set();
  setRoundResult('');
  game_buttons.forEach(key => key.disabled = false);
}

function set() {
  const playerScoreBox = document.querySelector('#player_score');
  const computerScoreBox = document.querySelector('#computer_score');
  const roundsCounterBox = document.querySelector('#current_round_counter');

  playerScoreBox.textContent = playerScore;
  computerScoreBox.textContent = computerScore;
    roundsCounterBox.textContent = roundsCounter;
}

function game(e) {
  let computerSelection = computerPlay();
  let playerSelection = playerPlay(e);

  let roundResult = playRound(playerSelection, computerSelection);
  if (computerScore < 5 && playerScore < 5) {

    setRoundResult(roundResult);
    roundsCounter++;
  }
  else if (computerScore >= 5 || playerScore >= 5) {
    setRoundResult(roundResult + "\n\n Final Result: \n\n" + getWinner());
    game_buttons.forEach(key => key.disabled = true);
  }
  set();
}

game_buttons.forEach(key => key.onclick = game);
reset_button.onclick = reset;
