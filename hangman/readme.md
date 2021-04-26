# memo

<img src="https://github.com/endw0901/javascript/blob/main/hangman/img.png" width="30%">

## javascript

- 該当するクラスの element すべて取得

```
const figureParts = document.querySelectorAll('.figure-part');
```

- [アルファベットの keyCode](https://webbeginner.hatenablog.com/entry/2014/12/23/114345) ※65-90

- JavaScript の配列の要素をすべて削除する : splice(0)

### 文字列操作

- 文字を含んでいたら

```
if (!wrongLetters.includes(letter)) {


    // 改行コード削除
  const innerWord = wordEl.innerText.replace(/\n/g, '');
```

- innerHTML の条件分岐で表示・非表示

```
  // 間違い入力を画面表示
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
```


## SVG

- SVG でのお絵描き

SVG は、少ないデータ量でも豊かな表現ができる画像フォーマットです。 テキストデータとして編集可能なことや、CSS で装飾できる点など、さまざまな魅力を備えています。
