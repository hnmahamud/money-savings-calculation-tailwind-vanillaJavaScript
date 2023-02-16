const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {
    const incomeInputField = document.getElementById('income-input-field');
    const foodInputField = document.getElementById('food-input-field');
    const rentInputField = document.getElementById('rent-input-field');
    const clothesInputField = document.getElementById('clothes-input-field');
    const totalExpensesField = document.getElementById('total-expenses-field');
    const balanceField = document.getElementById('balance-field');

    const totalExpenses = parseFloat(foodInputField.value) + parseFloat(rentInputField.value) + parseFloat(clothesInputField.value);
    const balance = parseFloat(incomeInputField.value) - totalExpenses;

    totalExpensesField.innerText = totalExpenses;
    balanceField.innerText = balance;
});

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function() {
    const incomeInputField = document.getElementById('income-input-field');
    const balanceField = document.getElementById('balance-field');
    const savingInputField = document.getElementById('saving-input-field');
    const savingAmountField = document.getElementById('saving-amount-field');
    const remainingBalanceField = document.getElementById('remaining-balance-field');

    const savings = parseFloat(incomeInputField.value) * (parseFloat(savingInputField.value) / 100);
    const remainingBalance = parseFloat(balanceField.innerText) - savings;

    savingAmountField.innerText = savings;
    remainingBalanceField.innerText = remainingBalance;
});