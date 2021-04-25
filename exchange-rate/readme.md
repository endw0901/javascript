# memo

## API

- Exchange-Rate API
- https://www.exchangerate-api.com/docs/standard-requests

## html

- プルダウン初期選択：option selected

```
<option value="EUR" selected>EUR</option>
```

## Javascript

- JSON を fetch(内部) => body のテキストを置き換える例

```
function calculate() {
  fetch('items.json')
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data[0].text));
}

calculate();

```
