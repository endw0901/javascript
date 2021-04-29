const msgEl = document.getElementById('msg');

// ------------------
// データ
// ------------------
const randomNum = getRandomNumber();
console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// ------------------
// 初期化
// ------------------
let recognition = new window.SpeechRecognition();

// ------------------
// 関数
// ------------------
function getRandomNumber() {
  // 1-100
  return Math.floor(Math.random() * 100) + 1;
}

function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
  checkNumber(msg);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
    <div>You saed:</div>
      <span class="box">${msg}</span>
  `;
}

function checkNumber(msg) {
  const num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML = '<div>That is not a valid number</div>';
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML = '<div>Number must be between 1 and 100</div>';
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
      <h2>Congrats! You have guessed the number! <br><br>
      It was ${num}</h2>
      <button class="play-agein" id="play-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div>GO LOWER</div>';
  } else {
    msgEl.innerHTML += '<div>GO HIGHER</div>';
  }
}
// ------------------
// 起動
// ------------------
recognition.start();

// ------------------
// イベント
// ------------------
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
});
