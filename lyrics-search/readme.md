# memo

<img src="https://github.com/endw0901/javascript/blob/main/lyrics-search/img.png" width="60%">

- 歌詞検索 API: https://lyricsovh.docs.apiary.io/#

## css

- 背景画像に overlay を掛けて薄くする

```
header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
```

## javascript

- API call : async-await を使わない promise .then 方式 ⇔ async-await 方式

```
async function searchSongs(term) {
  // fetch(`${apiURL}/suggest/${term}`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  console.log(data);
}
```

- forEach push 方式を map 方式にリファクタリング(map を使うこと)

```
  result.innerHTML = `
    <ul class="songs">
      ${data.data
        .map(
          (song) => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}"
      data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
        )
        .join('')}
    </ul>
  `;
```

- ボタンクリックか判定する(tagName)

```
  if (clickedEl.tagName === 'BUTTON') {
    console.log(123);
  }
```

### CORS 対応

- https://github.com/Rob--W/cors-anywhere
