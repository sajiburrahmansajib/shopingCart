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
        return totalCost;
    }
    else if (id == 'input-phone-value') {
        const totalCost = newValue * price;
        const totalCostElement = document.getElementById('total-cost-phone');
        totalCostElement.innerText = totalCost;
        return totalCost;

    }
    else {
        return 0;
    }

};
function setTextElementById(elementId, value) {
    const subTotalField = document.getElementById(elementId);
    subTotalField.innerText = value;

};

function makeSubToatal() {
    const totalCostPhoneField = document.getElementById('total-cost-phone');
    const totalCostCaseField = document.getElementById('total-cost-case');
    const subTotalPhoneString = totalCostCaseField.innerText;
    const subTotalCaseString = totalCostPhoneField.innerText;
    const subTotalCaseInt = parseInt(subTotalCaseString);
    const subTotalPhoneInt = parseInt(subTotalPhoneString);

    const subTotal = subTotalCaseInt + subTotalPhoneInt;

    setTextElementById('sub-total', subTotal);

    const taxValue = (subTotal * 0.1).toFixed(2);
    const taxValueFix = parseInt(taxValue);

    setTextElementById('tax-total', taxValueFix);

    const totalPrice = subTotal + taxValueFix;
    setTextElementById('total', totalPrice);


};