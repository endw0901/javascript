# memo

<img src="https://github.com/endw0901/javascript/blob/main/expense-tracker/img.png" width="50%">

# CSS

- マウスオーバーのときだけ × ボタンを表示したい

```
.delete-btn {
   opacity: 0;
}

.list li:hover .delete-btn {
  opacity: 1;
}
```

## javascript

- forEach で個別要素を引数に関数 call する際、引数が不要
  ※forEach(callback 関数)

```
function addTransactionDOM(transaction) {

transactions.forEach(addTransactionDOM);
```

- map() は配列から配列を作るメソッド

```
https://www.sejuku.net/blog/21812
「forEach」は単純に実行するだけのメソッドなのに対して、「map」は実行後の結果を配列データとして返してくれるという点が違う

map() は配列から配列を作るメソッドである
もとの配列は変更されず、新しい配列を作る
const array = [1, 2, 3]
const newArray = array.map(value => 2 * value)

console.log(newArray) // [ 2, 4, 6 ]
```

- toFixed(2) 小数点以下 2 桁（0 埋め) ※桁数処理はあいまいなので厳密には使わない
- 累積 reduce

```
 const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
```

- マイナスのものだけ累積: filter , reduce

```
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
```

- オブジェクトの値を数値にする

```
    // amountに+をつける：数値、つけない：文字列のオブジェクトになる
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

```

- filter で削除

```
transactions = transactions.filter((transaction) => transaction.id !== id);
```

### localStorage

- 取り出す

```
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
```
