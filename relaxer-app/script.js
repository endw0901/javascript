const container = document.getElementById('container');
const text = document.getElementById('text');

// ------------------
// データ
// ------------------

// ------------------
// 初期化
// ------------------
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; // grow - 40%
const holdTime = totalTime / 5; // stop - 20%
// 残り40%がshrink
// console.log(breatheTime, holdTime);

// ------------------
// 関数
// ------------------
function breathAnimation() {
  text.innerText = 'Breath In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// 一定時間ごとに繰り返し実行
setInterval(breathAnimation, totalTime); // total - breathe - hold の残りがbreathetimeになる
// ------------------
// 起動
// ------------------
breathAnimation();
// ------------------
// イベント
// ------------------
