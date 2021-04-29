const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

// ------------------
// データ
// ------------------
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// ------------------
// 初期化
// ------------------
const listItems = [];
let dragStartIndex;

// ------------------
// 関数
// ------------------
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

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
      const listItem = document.createElement('li');
      // listItem.classList.add('over'); // for debug
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

  addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}
function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}
function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}
function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  // dragOverでpreventDefaultが必要
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  // console.log(itemOne, itemTwo);
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    // https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}
// ------------------
// 起動
// ------------------
createList();

// ------------------
// イベント
// ------------------
check.addEventListener('click', checkOrder);
