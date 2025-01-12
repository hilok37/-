"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/


// Функция для вычисления заработной платы за вычетом налогов
function calculateNetSalary(salary) {
  const taxRate = 0.13;
  const netSalary = salary * (1 - taxRate);
  console.log(`Размер заработной платы за вычетом налогов равен ${netSalary}`);
}

const userInput = +prompt("Введите число:");

if (isNaN(userInput)) {
  console.log("Значение задано неверно");
} else {
  calculateNetSalary(parseFloat(userInput));
}
