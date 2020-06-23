// Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа

"use strict";
let num = +prompt("Введите целое число от 0 до 999");

function toObject() {
    let num1, num2, num3;
    let obj = {
        units:0,
        tens:0,
        hundreds:0
    };
    if (!Number.isInteger(num) || (num < 0 && num > 999) || num == NaN) {
        console.log("Число должно быть целым в диапазоне от 0 до 999")
        return console.log (obj);
    }else{
        return console.log (obj = {
        units: num1 = num - (Math.floor(num / 10) * 10),
        tens: num2 =((num - num1) - (Math.floor(num / 100) * 100))/ 10,
        hundreds: num3 = ((num - num1 - (num2*10)) - (Math.floor(num / 1000) * 1000)) / 100
        })
    };
};
toObject();