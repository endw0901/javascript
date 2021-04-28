# memo

<img src="https://github.com/endw0901/javascript/blob/main/breakout-game/img.png" width="40%">

- Canvas API : https://developer.mozilla.org/ja/docs/Web/API/Canvas_API
- Canvas 図形の描画：https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

## Javascript

- 2 次元配列でブロック描画（拡張 for としたい？

### canvas

1. Create canvas context
2. Create and draw ball / fillRect など
3. Create and draw paddle
4. Create bricks / 複数あり(array(row \* column))
5. Draw score
6. Add update() - Animate - requestAnimationFrame(cb) / bricks 破壊、リセットなど
7. Move paddle
8. Keyboard event handlers to move paddle
9. Move ball
10. add wall boundaries
11. Increase score when bricks break
12. Lose - redraw bricks, reset score

- 円を描く(arc のパラメータは ball オブジェクトから)

```
  ctx.beginPath();
  // arc(x, y, radius, startAngle, endAngle, anticlockwise) anticlockwize デフォルトは時計回り
  // https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#arcs
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
```

- Window.requestAnimationFrame()：https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
  ※再描画し続ける <br>
  https://leap-in.com/ja/use-requestanimtionframe/ <br>
  Javascript でアニメーションを行う時に requestAnimationFrame を使うとパフォーマンスの低下を防ぐことができます。
  簡単にいうと requestAnimationFrame は渡した関数をブラウザの表示を邪魔しないタイミングで処理されるようにする関数です。
  引数に実行したい関数を渡すだけでその関数が、ブラウザにとって最適なタイミングで処理されるようになります。

requestAnimationFrame を利用した場合はフレーム更新の処理直後に引数に渡した処理が実行されます。そのためフレームの更新を邪魔することがなく、フレームレイトを最適に保つことができます。

setTimeout, setInterval はブラウザの状況を考えず時間が来たら実行されるため、ブラウザのレンダリングを邪魔してしまうことがあります。
なるべく、requestAnimationFrame を使用して、ブラウザに優しい実装を行いましょう。

- canvas draw(クリアして draw)
- 壁衝突判定
- keydown(押したら進む)、keyup(離したらとまる)

### others

## css

- ボタンクリックでぐにゃっとなるエフェクト

```
.btn:active {
  transform: scale(0.98);
```
