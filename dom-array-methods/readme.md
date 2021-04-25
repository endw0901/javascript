# memo

<img src="https://github.com/endw0901/javascript/blob/main/dom-array-methods/img/img.png" width="30%">

## API

- ランダムユーザー生成 API

  - https://randomuser.me/
  - https://randomuser.me/api

- 国籍指定：https://randomuser.me/documentation#howto
  ※米国人：
  https://randomuser.me/api/?nat=us <br>

## javascript

- 外部 API async await

```
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/?nat=us');

  const data = await res.json();
  const user = data.results[0];
```

- 引数無し関数の引数初期値

```
function updateDOM(providedData = data) {

}
```

- ランダムユーザーの html 要素を生成
  ※ランダムユーザーを作る => newUser を配列に push => Element を作成＆class 追加 => 作成した要素の innerHTML に、newUser 配列を forEach ループで格納していく
  => appendChild で要素を main に追加

```
// 要素作成
    const element = document.createElement('div');

// クラス追加
    element.classList.add('person');
// HTML作成
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;

// mainにappendChild
    main.appendChild(element);

```

- 通貨書式のフォーマット：https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

```
(12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
```

- オブジェクトのスプレッド構文

```
  data = data.map((user) => {
    // オブジェクトのspread syntax: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // ...userでオブジェクトを構成する要素をそのまま返す + moneyが既存のpropertyなので、置き換えになる
    // ※追加にはならない。既存propertyしかないので
    return { ...user, money: user.money * 2 };
  });
```

### 関数

- map()
- sort()

```
data.sort((a, b) => b.money - a.money);
```

- filter()

```
  // 新しい配列に破壊的に置き換わる
  data = data.filter((user) => user.money > 1000000);
```

- reduce()
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

```
  // 初期値0で累積
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
```
