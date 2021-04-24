# memo

<img src="https://github.com/endw0901/javascript/blob/main/movie-seat-booking/img.png" width="30%"><br>

- JS のカウンター

## localStorage

- ブラウザリフレッシュされても直前の情報を再現できる

```
▼set
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);

▼get
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
```

## css

### css selector

- 特定のクラスではない（専有されていない席）

```
.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1);
}
```

- 配列リストから条件にあう要素を検索

```
  if (e.target.classList.contains('seat')) {
    console.log(e.target);
  }
```

### css 表現

- 光るスクリーン

```
.screen {
  background-color: #fff;
  height: 70px;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  /* スクリーンが光る表現 */
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}
```

- 傾き

```
  /* 傾きを表現 */
  perspective: 1000px;
```

### string to number

```
// + があるとnumber。+がないとstring
// +がparseIntの働きをしているの働きをしている
const ticketPrice = +movieSelect.value;

console.log(typeof ticketPrice);
```

## Javascript

- spread syntax : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- spread syntax => map 関数 => indexOf

```
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });


// arrow 関数
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

// {}を省略して短縮形
const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

// 別例
const arr = [1,2,3]
const arr2 = [...arr, 4, 5]

```
