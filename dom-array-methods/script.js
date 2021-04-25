const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/?nat=us');
  const data = await res.json();
  // console.log(data.results);
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function doubleMoney() {
  data = data.map((user) => {
    // オブジェクトのspread syntax: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // ...userでオブジェクトを構成する要素をそのまま返す + moneyが既存のpropertyなので、置き換えになる
    // ※追加にはならない。既存propertyしかないので
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter only Millionaires
function showOnlyMillionaires() {
  // 新しい配列に破壊的に置き換わる
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}

function calculateWealth() {
  // 初期値0で累積
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  // 引数無しはdata
  updateDOM();
}

function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// ---------------------------------------------
// イベント
// ---------------------------------------------

// ユーザー追加
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showOnlyMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
