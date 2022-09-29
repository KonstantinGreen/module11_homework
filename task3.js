/* Задание 3.
Написать функцию, которая принимает число как 
аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

function getNum(number1) {
  return function getNum(number2) {
     return number1 + number2;
  }
};
const result = getNum(1)(2);
console.log(`Сумма двух чисел равна = ${result} `);  