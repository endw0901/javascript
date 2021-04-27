# memo

## jsonplaceholder

- https://jsonplaceholder.typicode.com/
- https://jsonplaceholder.typicode.com/posts
- 1 ページ 3 件にしぼり、2 ページ目(4-6)を取得：https://jsonplaceholder.typicode.com/posts?_limit=3&_page=2

## javascript

- id でとる場合、class でとる場合

```
const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
```

- スクロールイベント：window.addEventListener('scroll', () => {

- destructuring

```
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
```

- スクロールではみ出した時を検知（scrollTop, scrollHeight, clientHeight）

- 一定時間経ったら消す：setTimeout

```
function showLoading() {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');
  }, 1000);
}

- setTimeoutのネスト => ローディング => 1000msで消す => さらに+300msで次のコンテンツを出す

```

function showLoading() {
loading.classList.add('show');

setTimeout(() => {
loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);

}, 1000);
}

```

- 複数ブログからfilter文字列 => function filterPosts(e) {参照
- 文字列検索indexOf: https://techacademy.jp/magazine/14759


## css

- bounce 跳ねるアニメーション

```

@keyframes bounce {
0%,
100% {
transform: translateY(0);
}

50% {
transform: translateY(-10px);
}
}

```

- ①② の css

```

.post .number {
/_ 左上に突き出す _/
position: absolute;
top: -15px;
left: -15px;
font-size: 15px;
width: 40px;
height: 40px;
/_ 丸くする _/
border-radius: 50%;
background: #fff;
color: #296ca8;
/_ 中央寄せ _/
display: flex;
align-items: center;
justify-content: center;
padding: 7px 10px;
}

```

```
