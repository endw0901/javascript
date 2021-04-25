# memo

<img src="https://github.com/endw0901/javascript/blob/main/video-player/img/img.png" width="30%">

## javascript

### video APIs

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

- video タグに control をつけることで再生できるようになる

### テクニック

- innerHTML

```
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    // 再生中は停止ボタンにアイコンが変わる
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
```

- プログレスバーの位置をビデオの再生箇所に反映
- ビデオの今の時間をプログレスバーに反映
- ビデオ再生・停止・巻き戻し

## CSS

- Range Inputs
  https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ <br>

※プログレスバーをカスタマイズして大きくつまめるようにした <br>
