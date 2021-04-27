const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();
  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;

    postsContainer.appendChild(postEl);
  });
}

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

function filterPosts(e) {
  // console.log(e.target.value);

  // 1.検索文字列の取得
  const term = e.target.value.toUpperCase();
  // 2.検索対象全体の取得
  const posts = document.querySelectorAll('.post');

  posts.forEach((post) => {
    // 3.個別検索対象の、検索対象テキストをそれぞれ取得
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    // 文字列を検索し、なかったら-1、あったら位置を返す
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// --------------------------------
// 起動
// --------------------------------
showPosts();

// --------------------------------
// イベント
// --------------------------------
window.addEventListener('scroll', () => {
  // destructuring
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // ※見えている スクロール位置0 + clientHeight 500 <= スクロール領域600（表示外含めた領域全体の高さ)
  // ※見えている スクロール位置200 + clientHeight 500 > スクロール領域600（表示外含めた領域全体の高さ)
  // 　　※最下部が700の位置にあり、100はみ出している
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts);
