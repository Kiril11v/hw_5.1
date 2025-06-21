const start = 20;
const end = 30;
const list = Array.from({ length: end - start + 1}, (_, i) => start + i);
// array.from - створює масив;
// 30 - 20 + 1 = 11 кількість чисел; 
// _ - позначка що не має значення для усування undefined бо створюється новий масив

const extraList = list.flatMap((n, i) =>  // проходиться по елементам одночасно отримуючи індекс
i === list.length - 1 
? [n] : [n, n + 0.5]). join(' '); // на останньому елементі не додається 0.5 

console.log(extraList);
