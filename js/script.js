let days = document.querySelector('.input1');
let profit = document.querySelector('.input2');
let base = document.querySelector('.input3');
let count = document.querySelector('.count');
let div = document.querySelector('.calc');
let clear = document.querySelector('.clear');

let daysValue;
let profitValue;
let baseValue;


days.oninput = function () {
    daysValue = parseInt(days.value);
    console.log(daysValue); 
}
profit.oninput = function () {
    profitValue = parseInt(profit.value);
    console.log(profitValue);
}
base.oninput = function () {
    baseValue = parseInt(base.value);
    console.log(baseValue);
}


count.onclick = function () {
  
    if (days.value == '' || profit.value == '' || base.value == '') {
        alert('заполните все поля');
    }
        let premieFond = profitValue * 0.02;
            console.log(`премиальный фонд - ${premieFond}`);
        let daysInPercent = Math.round(daysValue * 100 / 31);
        console.log(`дни в процентах - ${daysInPercent}`);
        let premie = Math.round(premieFond * (daysInPercent / 100));
            console.log(`премия - ${premie}`);
        let salary = baseValue * daysValue + premie;
            console.log(`зарплата - ${salary}`);  
            console.log(`базовая ставка - ${base}`);


        let info = document.createElement('p');
        info.classList.add('message');
        info.textContent = 'Зарплата за месяц: ' + (salary) + ' рублей';
        div.append(info);  
        }
    
  


clear.onclick = function () {
days.value = '';
profit.value = '';
document.querySelector('.message').remove();
}

