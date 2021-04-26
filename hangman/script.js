const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

// const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        (letter) => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;

  // 改行コード削除
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  // console.log(wordEl.innerText, innerWord);

  // ゲーム終了条件
  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won!😄';
    popup.style.display = 'flex';
  }
}

function updateWrongLettersEl() {
  // 間違い入力を画面表示
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  // 間違えたらhangmanパーツ表示
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // 敗北条件
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost . 😥';
    popup.style.display = 'flex';
  }
}

function showNotification() {
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', (e) => {
  // console.log(e.keyCode);
  // アルファベット 65-90
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      // 正しい場合
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        // 既に入力済み
        showNotification();
      }
    } else {
      // 間違い
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        // 既に入力済み
        showNotification();
      }
    }
  }
});

playAgainBtn.addEventListener('click', () => {
  // 初期化
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // 正解を作り直し
  selectedWord = words[Math.floor(Math.random() * words.length)];

  // restart
  displayWord();
  updateWrongLettersEl;
  popup.style.display = 'none';
});

// start
displayWord();
