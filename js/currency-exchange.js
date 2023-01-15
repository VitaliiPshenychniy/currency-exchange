// Кнопки
const btnCulc = document.querySelector('.btn-calc');
const btnReset = document.querySelector('.btn-reset');

// Вікна для вводу інформації
const valueCourse = document.querySelector('input[course]');
const valueCurrency = document.querySelector('input[currency]');
const valueMoney = document.querySelector('input[money]');

// Вивід результату
const outputText = document.querySelector('.total');
const outputEl = document.querySelector('.js-output');

// Оголошення змінних
let result = 0;

// Слухач кнопки РОЗРАХУНОК
btnCulc.addEventListener('click', function () {
  const course = Number(valueCourse.value);
  const currency = Number(valueCurrency.value);
  const money = Number(valueMoney.value);

  if (course > 0 && currency > 0 && money == 0) {
    result = course * currency;
    outputText.textContent = `Вартість ${currency} у.о.`;
    outputEl.textContent = `${parseInt(result)} грн.`;
  } else {
    if (course > 0 && money > 0 && currency == 0) {
      result = money / course;
      outputText.textContent = `На ${money} грн. можливо купити`;
      outputEl.textContent = `${parseInt(result)} у.о.`;
    } else {
      outputEl.textContent = 'Невірно введені дані';
    }
  }

  valueCourse.value = '';
  valueCurrency.value = '';
  valueMoney.value = '';
});

// Слухач кнопки СКИНУТИ
btnReset.addEventListener('click', function () {
  outputEl.textContent = '';
  outputText.textContent = '';
  valueCourse.value = '';
  valueCurrency.value = '';
  valueMoney.value = '';
});
