# memo

<img src="https://github.com/endw0901/javascript/blob/main/exchange-rate/img/img.png" width="30%">

## API

- Exchange-Rate API
- https://www.exchangerate-api.com/docs/standard-requests

## html

- プルダウン初期選択：option selected

```
<option value="EUR" selected>EUR</option>
```

## Javascript

- fetch API

```
  fetch(
    `https://v6.exchangerate-api.com/v6/5e876f9bf92ba5846129162d/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      // 通貨名で交換レートを検索
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
```

- JSON を fetch(内部) => body のテキストを置き換える例

```
function calculate() {
  fetch('items.json')
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data[0].text));
}

calculate();

```


