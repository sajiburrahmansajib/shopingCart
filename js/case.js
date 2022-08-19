document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newValue = makeIncreaseDecress('input-case-value', true);
    makeIncreaseDecressPrice(newValue, 'input-case-value', 59)
    makeSubToatal()


});
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newValue = makeIncreaseDecress('input-phone-value', true);
    makeIncreaseDecressPrice(newValue, 'input-phone-value', 1219)
    makeSubToatal()


});
document.getElementById('btn-phone-sub').addEventListener('click', function () {
    const newValue = makeIncreaseDecress('input-phone-value', false);
    makeIncreaseDecressPrice(newValue, 'input-phone-value', 1219)
    makeSubToatal()

});
document.getElementById('btn-case-sub').addEventListener('click', function () {
    const newValue = makeIncreaseDecress('input-case-value', false);
    makeIncreaseDecressPrice(newValue, 'input-case-value', 59)
    makeSubToatal()


});