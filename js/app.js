const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {
    const income = getInputFieldValue('income-input-field');
    const food = getInputFieldValue('food-input-field');
    const rent = getInputFieldValue('rent-input-field');
    const clothes = getInputFieldValue('clothes-input-field');

    if(income && food && rent && clothes) {
        const totalExpenses = food + rent + clothes;
        const balance = income - totalExpenses;
        if(balance >= totalExpenses) {
            setTextFieldValue('total-expenses-field', totalExpenses);
            setTextFieldValue('balance-field', balance);
        }
        else {
            alert('Cut your coat according to your cloth!')
        }
    }
    else {
        alert('Please input valid number!');
    }
});


const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function() {
    const income = getInputFieldValue('income-input-field');
    const balance = getTextFieldValue('balance-field');
    const savingInput = getInputFieldValue('saving-input-field');

    if(income && balance && savingInput) {
        const savings = income * (savingInput / 100);
        const remainingBalance = balance - savings;
    
        setTextFieldValue('saving-amount-field', savings);
        setTextFieldValue('remaining-balance-field', remainingBalance);
    }
    else {
        alert('Please input valid number!');
    }
});