/////////////////Переменные/////////////////////

let days = document.querySelector('.input1');
let profit = document.querySelector('.input2');
let base = document.querySelector('.input3');
let countBtn = document.querySelector('.btn-count');
let div = document.querySelector('.calc');
let clearBtn = document.querySelector('.btn-clear');
let help = document.querySelector('.help');
let note = document.getElementById('note');
let closeBtn = document.getElementById('close-btn');
let monthLength = document.querySelector('.month-length');
let message = document.querySelector('.message');

let daysValue;
let profitValue;
let baseValue;


days.oninput = function () {
    daysValue = days.value;
}
profit.oninput = function () {
    profitValue = profit.value;
}
base.oninput = function () {
    baseValue = base.value;
}

///////////////////Функции//////////////////////

let countSalary = () => {

    if (days.value == '' || profit.value == '' || base.value == '') {
        alert('заполните все поля');
    }
    else {
        let premieFond = profitValue * 0.02;

        let daysInPercent = Math.round(daysValue * 100 / monthLength.value);

        let premie = Math.round(premieFond * (daysInPercent / 100));

        let salary = baseValue * daysValue + premie;
        console.log(salary);
        return salary;
    }
}


let showSalary = () => {
    message.textContent = 'Зарплата за месяц: ' + countSalary() + ' руб.';
}

///////////////Обработчики событий//////////////////

countBtn.addEventListener('click', showSalary);

clearBtn.onclick = function () {
    days.value = '';
    profit.value = '';
    message.textContent = 'Зарплата за месяц:';
}


help.addEventListener('click', function () {
    note.classList.remove('note-hidden');
});

closeBtn.addEventListener('click', function () {
    note.classList.add('note-hidden');
});



