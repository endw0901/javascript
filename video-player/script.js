const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// ビデオ再生・一時停止
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    // 再生中は停止ボタンにアイコンが変わる
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// ビデオの今の時間をプログレスバーに反映
function updateProgress() {
  // duration:ビデオの長さ
  progress.value = (video.currentTime / video.duration) * 100;

  // タイムスタンプから分取得 => 1-9は01-09表示
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // 秒は分計算のあまり
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// プログレスバーの位置をビデオの再生箇所に反映
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
  // 停止・巻き戻し
  video.currentTime = 0;
  video.pause();
}

// イベント
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus); // 再生・一時停止
stop.addEventListener('click', stopVideo); // 停止・巻き戻し
progress.addEventListener('change', setVideoProgress);
