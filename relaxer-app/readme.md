# memo

<img src="https://github.com/endw0901/javascript/blob/main/relaxer-app/img/img.png" width="40%">

- 円の回転は css で rotate し、同じ時間を js で縮小拡張を time 起動 + className で分ける

## javascript

- time 処理ごとに className を変えることで time 起動のアニメーションができる

## css

- circle の下に、少し大きい円をつけて外側だけ色がでるサークルを作る
- circle の外側に小さい円が rotate 一周し続ける

### time 処理

- setTimeout…一定時間後に一度だけ特定の処理をおこなう
- setInterval…一定時間ごとに特定の処理を繰り返す

### グラフ

- 円グラフ
  https://deshinon.com/2019/03/02/en-gragh-chart-css-animation/ <br>
  https://lpeg.info/html/css_piechart.html <br>

```
.gradient-circle {
  background: conic-gradient(#55b7a4 0%, #4ca493 40%, #fff 40%, #fff 60%, #336d62 60%, #2a5b52 100%);
  height: 320px;
  width: 320px;
  z-index: 2;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
}
```
