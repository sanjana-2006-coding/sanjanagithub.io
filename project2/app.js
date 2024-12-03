let balance = 0;

document.getElementById('addIncome').addEventListener('click', () => {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (desc && amount > 0) {
        balance += amount;
        updateBalance();
        addTransaction(desc, amount, "Income");
    }
});

document.getElementById('addExpense').addEventListener('click', () => {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (desc && amount > 0) {
        balance -= amount;
        updateBalance();
        addTransaction(desc, -amount, "Expense");
    }
});

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function addTransaction(desc, amount, type) {
    const li = document.createElement('li');
    li.textContent = `${type}: ${desc} - ${amount}`;
    document.getElementById('transactionList').appendChild(li);
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}
