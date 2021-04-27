# memo

<img src="https://github.com/endw0901/javascript/blob/main/memory-cards/img.png" width="60%">

## css

- flip effect カードがめくり返す表現
- https://webdesignfacts.net/entry/flipcards-animation/#gsc.tab=0

```
transform-style: preserve-3d;
backface-visibility: hidden;
```

- font-awesome unicode (css で使うとき): https://fontawesome.com/v4.7.0/icon/refresh

## javascript

- JavaScript で forEach を使うのは最終手段：https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce

```
配列に対して何らかの操作を行う際は、
filter, find, map, reduce などのメソッドを利用できないか検討し、
いずれのメソッドでも実現ができない場合の最終手段として forEach を選択しましょう。

※意図が伝わりやすい
```

- localStorage の JSON.parse

```
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}
```

- object 生成。この 2 つは同じ意味

```
    // const newCard = { question: question, answer: answer };
    const newCard = {question, answer}
```
