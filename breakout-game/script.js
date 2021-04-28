// ------------------
// 開発ステップ
// ------------------
// 1. Create canvas context
// 2. Create and draw ball / fillRect など
// 3. Create and draw paddle
// 4. Create bricks / 複数あり(array(row \* column))
// 5. Draw score
// 6. Add update() - Animate - requestAnimationFrame(cb) / bricks 破壊、リセットなど
// 7. Move paddle
// 8. Keyboard event handlers to move paddle
// 9. Move ball
// 10. add wall boundaries
// 11. Increase score when bricks break
// 12. Lose - redraw bricks, reset score

const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');

// ------------------
// 初期化
// ------------------
let score = 0;
const brickRowCount = 9;
const brickColumnCount = 5;

// ------------------
// データ
// ------------------
// https://developer.mozilla.org/ja/docs/Web/API/Canvas_API
const ctx = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  // x方向の速度, y方向の速度(下) ※ballは自動で動く
  dx: 4,
  dy: -4,
};

const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  // x方向の速度, y方向の速度(下) ※paddleは横にしか動かない
  // 0なので、paddleは入力によって動く。自動では動かない
  dx: 0,
};

const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}
// console.log(bricks);

// ------------------
// 関数
// ------------------
function drawBall() {
  ctx.beginPath();
  // 円を描く（ボール）
  // arc(x, y, radius, startAngle, endAngle, anticlockwise) anticlockwize デフォルトは時計回り
  // https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#arcs
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

function drawBricks() {
  bricks.forEach((column) => {
    column.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}

function movePaddle() {
  paddle.x += paddle.dx;

  // 壁衝突判定
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

// 押したら進む
function keyDown(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.dx = paddle.speed;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.dx = -paddle.speed;
  }
}

// keyを離したらとまる
function keyUp(e) {
  if (
    e.key === 'Right' ||
    e.key === 'ArrowRight' ||
    e.key === 'Left' ||
    e.key === 'ArrowLeft'
  ) {
    paddle.dx = 0;
  }
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // 壁衝突検知 x
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    // 左右反転する
    ball.dx *= -1; // ball.dx = ball.dx * -1
  }

  // 天井衝突検知
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    // 上下反転;
    ball.dy *= -1;
  }

  // console.log(ball.x, ball.y);

  // パドル衝突検知 (パドル幅の範囲にballが収まり、かつパドルより下に来た時(下の方が数値が大きい))
  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy = -ball.speed;
  }

  // レンガ衝突検知
  bricks.forEach((column) => {
    column.forEach((brick) => {
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w && // 左右の範囲に収まってる
          ball.y + ball.size > brick.y && // ボールの下側がレンガの上より下にある
          ball.y - ball.size < brick.y + brick.h // ボールの上側がレンガの下より上にある
        ) {
          ball.dy *= -1; //上下反転
          brick.visible = false;
          increaseScore();
        }
      }
    });
  });

  // 底についたらgame over
  if (ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
  }
}

function showAllBricks() {
  bricks.forEach((column) => {
    column.forEach((brick) => (brick.visible = true));
  });
}

function increaseScore() {
  score++;
  if (score % (brickRowCount * brickColumnCount) === 0) {
    showAllBricks();
  }
}

// ------------------
// 起動
// ------------------
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

function update() {
  movePaddle();
  moveBall();

  draw();
  requestAnimationFrame(update);
}

update();

// ------------------
// イベント
// ------------------
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
});

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
