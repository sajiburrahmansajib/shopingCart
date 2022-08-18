function makeIncreaseDecress(id, plusMinus) {
    const inputField = document.getElementById(id);
    const btnPlusMinusString = inputField.value;
    const btnincreseDecressInt = parseInt(btnPlusMinusString)

    let newNumber;
    if (plusMinus == true) {
        newNumber = btnincreseDecressInt + 1
    }
    else {
        newNumber = btnincreseDecressInt - 1;
    }
    inputField.value = newNumber;
    return newNumber;
}

function makeIncreaseDecressPrice(newValue, id, price) {
    if (id == 'input-case-value') {
        const totalCost = newValue * price;
        const totalCostElement = document.getElementById('total-cost-case');
        totalCostElement.innerText = totalCost;
    }
    else if (id == 'input-phone-value') {
        const totalCost = newValue * price;
        const totalCostElement = document.getElementById('total-cost-phone');
        totalCostElement.innerText = totalCost;

    }
    else {
        return 0;
    }

};