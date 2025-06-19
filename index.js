const list = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const extraList = list.flatMap(n => [n, n + 0.5]).slice(0, -1).join(' '); 
// flatMap трансформує нові масиви залишаючи старі; 
// slice копіює все окрім останього масиву 0.5
// join додає пробіли

console.log(extraList);