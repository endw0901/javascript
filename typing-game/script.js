const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// Word
const words = [
  'steer',
  'silver',
  'quince',
  'admit',
  'drag',
  'loving',
  'department',
  'book',
  'darius',
];

// ------------------
// 初期化
// ------------------
let randomWord;
let score = 0;
let time = 10;
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'mediumc';

// ------------------
// 関数
// ------------------
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--; // 10sから1sずつカウントダウン
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

// Add to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// ------------------
// イベント
// ------------------
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';
    if (difficulty === 'hard') {
      time += 2; // 正解時はタイムボーナス
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
// ------------------
// 起動
// ------------------
// console.log(getRandomWord());

difficultySelect.value = difficulty;
const timeInterval = setInterval(updateTime, 1000); // 1秒ごとカウントダウン
text.focus(); // 開始時に入力フォームに位置する
addWordToDOM();
