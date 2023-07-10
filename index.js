// значение из первого input
const FIRST_NUM_INPUT = document.getElementById('first-num');
// значение из второго input
const SECOND_NUM_INPUT = document.getElementById('second-num');
// кнопка "получить результат"
const RESULT_BTN = document.getElementById('final-sum');
// кнопка "сбросить значения"
const RESET_BTN = document.getElementById('reset-btn');
// отображение значения операции
const RESULT_SUM = document.getElementById('result-oper');
// варианты кнопок-операций 
const PLUS_BTN = document.getElementById('plus');
const MINUS_BTN = document.getElementById('minus');
const MULTIP_BTN = document.getElementById('multip');
const DIVISION_BTN = document.getElementById('division');

FIRST_NUM_INPUT.value = '';
SECOND_NUM_INPUT.value = '';
RESULT_SUM.textContent = 0;
let result = 0;
let action = '+';

// варианты операций с числами из input
PLUS_BTN.onclick = function () {
    action = '+';
}

MINUS_BTN.onclick = function () {
    action = '-';
}

MULTIP_BTN.onclick = function () {
    action = '*';
}

DIVISION_BTN.onclick = function () {
    action = '/';
}
//-----------------------------
function calcResult() {
    if (action == '+') {
        let result = Number(FIRST_NUM_INPUT.value) + Number(SECOND_NUM_INPUT.value);
        RESULT_SUM.textContent = result; 
    }

    if (action == '-') {
        let result = Number(FIRST_NUM_INPUT.value) - Number(SECOND_NUM_INPUT.value);
        RESULT_SUM.textContent = result; 
    }

    if (action == '*') {
        let result = Number(FIRST_NUM_INPUT.value) * Number(SECOND_NUM_INPUT.value);
        RESULT_SUM.textContent = result; 
    }

    if (action == '/') {
        let result = Number(FIRST_NUM_INPUT.value) / Number(SECOND_NUM_INPUT.value);
        RESULT_SUM.textContent = result; 
    }
    // проверка input на пустоту и на ноль
    if (!FIRST_NUM_INPUT.value || !SECOND_NUM_INPUT.value || FIRST_NUM_INPUT.value == 0 || SECOND_NUM_INPUT.value == 0) {
        alert('Введите верное значение числа')
        RESULT_SUM.textContent = 0;
    }
}
// обнуляем значения inputs и сумму
function clearValues() {
    FIRST_NUM_INPUT.value = '';
    SECOND_NUM_INPUT.value = '';
    RESULT_SUM.textContent = 0;
}
// обработчик при нажатии на кнопку "Получить результат"
RESULT_BTN.addEventListener('click', calcResult);
// Обработчик при нажатии на кнопку "Сбросить значения"
RESET_BTN.addEventListener('click', clearValues)



