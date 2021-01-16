let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//  Play Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem;';
});

// Click Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there"s no Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    //when the players win
  } else if (guess === secretNumber) {
    displayMessage('💥 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📉 Too Hight' : '📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
