const btnCulc = document.querySelector('.btn-calc');
const btnReset = document.querySelector('.btn-reset');
const valueCourse = document.querySelector('input[course]');
const valueAmount = document.querySelector('input[amount]');
const outputEl = document.querySelector('.js-output span');

let price = 0;

// Слухач кнопки РОЗРАХУНОК
btnCulc.addEventListener('click', function () {
    const course = Number(valueCourse.value);
    const amount = Number(valueAmount.value);

    price = course * amount;

    outputEl.textContent = price;

    valueCourse.value = '';
    valueAmount.value = '';
});

// Слухач кнопки СКИНУТИ
btnReset.addEventListener('click', function () {
    outputEl.textContent = 0;
    valueCourse.value = '';
    valueAmount.value = '';
})


