/*Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

function arrayCounter(){
  let arrBig = [1, 2, 6, 7, 10, "apple", null, 0];
  let isNull = 0;
  let count = 0;
  let evenCount = 0;
  let oddCount = 0;
 for (let i = 0; i < arrBig.length; i++) {
   if (typeof arrBig[i] === "number" || !isNaN(arrBig[i])) {
     count += 1;
    if (arrBig[i] == null) {
       isNull += 1;
    } else if (arrBig[i] % 2 === 0) {
      evenCount += 1;
   } else {
      oddCount += 1;
   }   } }
console.log(`В массиве: ${count} цифр, ${isNull} Null's, ${evenCount} чётных, ${oddCount} нечётных!`);
}
arrayCounter();