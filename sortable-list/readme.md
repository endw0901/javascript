# memo

<img src="https://github.com/endw0901/javascript/blob/main/sortable-list/img.png" width="35%">

- ドラッグ＆ドロップ: https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API
- ドラッグ＆ドロップでエフェクト＆要素入れ替え
- ランダムに並び替えた配列を作成

## css

- 一番最後を除くすべての item

```
.draggable-list li:not(:last-of-type) {
```

## javascript

- パネル上に mouseover：https://ja.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
- サッカーボールの drag&drop：https://ja.javascript.info/mouse-drag-and-drop

- ループでイベントリスナー生成：addEventListeners();

### drag&drop

- classList.add/remove でドラッグドロップ時の effect
- dragOver で preventDefault が必要

### spread 構文・map・forEach

- spread 構文：配列の copy：https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8
- 配列を copy して配列 index を Attribute にもつ li の DOM をループ作成

```
function createList() {
  // ...は配列のcopy
  [...richestPeople]
    // mapは処理後に新しい配列を返す(ランダム並び替え後の新しい配列を返すために使う)
    // 元の要素 + ランダムなsort用数字を持つオブジェクト配列になる
    .map((a) => ({ value: a, sort: Math.random() }))
    // 数値で並び替える(.sort()では文字列で並び替え) a-bは昇順並び替え
    .sort((a, b) => a.sort - b.sort)
    // sort-keyを削除
    .map((a) => a.value)
    // 並び替えた配列の要素を1つずつ処理する
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}
```

### sort

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```
// 1) 通常のソートは文字列に変換される
// 1,110,3,302,40に並び替えられる
const numbers = [1,3,110,40,302];
numbers.sort()

// 2) arr.sort(compareFunction)では、数値で並び替えできる
numbers.sort(function(a,b) {
  return a - b;
})

```
