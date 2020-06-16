//С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно
//определить чётность числа.
'use strict'
let num;
for (num = 0; num <= 10; num++) {
    if (num == 0) {
        console.log(`${num} - ноль`);
    } else if (num % 2 !== 0) {
        console.log(`${num} - нечётное число`);
    } else {
        console.log(`${num} - чётное число`);
    };

};