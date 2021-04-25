// function calculate() {
//   fetch('items.json')
//     .then((res) => res.json())
//     .then((data) => (document.body.innerHTML = data[0].text));
// }

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// レート取得
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

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
}

// イベント
currencyEl_one.addEventListener('change', calculate); // 通貨を変更したとき
amountEl_one.addEventListener('input', calculate); // 数字をタイプしたとき
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

// run
calculate();
