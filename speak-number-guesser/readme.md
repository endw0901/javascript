# memo

- 音声認識 API：https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition <br>
  ※Chrome, Edge のみの実験的機能 <br>
  ※ブラウザでマイク許可を押す必要あり<br>

<img src="https://github.com/endw0901/javascript/blob/main/speak-number-guesser/img/img.png" width="50%">

## javascript

- 1-100 のランダム数字

```
  // 1-100
  return Math.floor(Math.random() * 100) + 1;
```

- 数値変換：const num = +msg;

- 数値かどうかチェック

````
  if (Number.isNaN(num)) {
    ```
````

- テキストを追加したいとき（置き換えでなく)

```
 msgEl.innerHTML += '<div>GO LOWER</div>';
```
