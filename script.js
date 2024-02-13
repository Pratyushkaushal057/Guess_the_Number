'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Answer';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayMessage = function () {
//   document.querySelector('.message').textContent = message;
// };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is No Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // displayMessage('No Number');

    // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    // displayMessage('Correct number');
    // displayMessage('You Win!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When Guess is Too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';

      // displayMessage('Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';

      // displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }

    // When Guess is Too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';

      // displayMessage('Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';

      // displayMessage('You Lost the Game!');
      doucument.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing...';

  // displayMessage('Start Guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
