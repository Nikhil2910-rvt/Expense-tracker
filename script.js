const balance = document.getElementsById('balance');
const money_plus = document.getElementsById('money-plus');
const money_minus = document.getElementsById('money-minus');
const list = document.getElementsById('list');
const form = document.getElementsById('form');
const text = document.getElementsById('text');
const amount = document.getElementsById('amount');

const dummyTransactions = [
  {
    id: 1,
    text: 'Flower',
    amount: -20,
  },
  {
    id: 2,
    text: 'Salary',
    amount: 300,
  },
  {
    id: 3,
    text: 'Book',
    amount: -10,
  },
  {
    id: 4,
    text: 'Camera',
    amount: 150,
  },
];

let transactions = dummyTransactions;
//Add transactions to dom list

function addTransactionDOM(transaction) {
  //sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');
  //add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn">x</button>`;

  list.appendChild(item);
}

//init app

function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
}
init();
