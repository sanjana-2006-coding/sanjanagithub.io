let balance = 0;
let income = 0;
let expense = 0;

document.getElementById('addTransaction').addEventListener('click', () => {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (desc && !isNaN(amount)) {
        const transactionList = document.getElementById('transactionList');
        const li = document.createElement('li');
        li.innerHTML = `
            ${desc} - ₹${amount} 
            <span class="delete-btn">x</span>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => {
            transactionList.removeChild(li);
            updateBalance(-amount);
            if (amount > 0) {
                income -= amount;
            } else {
                expense -= Math.abs(amount);
            }
            updateIncomeExpense();
        });

        transactionList.appendChild(li);

        updateBalance(amount);
        if (amount > 0) {
            income += amount;
        } else {
            expense += Math.abs(amount);
        }
        updateIncomeExpense();

        document.getElementById('desc').value = '';
        document.getElementById('amount').value = '';
    }
});

function updateBalance(amount) {
    balance += amount;
    document.getElementById('balance').textContent = `₹${balance}`;
}

function updateIncomeExpense() {
    document.getElementById('income').textContent = `₹${income}`;
    document.getElementById('expense').textContent = `₹${expense}`;
}
