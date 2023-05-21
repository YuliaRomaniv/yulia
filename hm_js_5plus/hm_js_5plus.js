// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     }
//     if (b < a && b < c){
//         return b;
//     }
//
//     else {
//         return c;
//     }
// }
//
// console.log(min(10, -20, 150));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const max = (a, b, c) => {
//     if ( a > b && a > c){
//         return a;
//     }
//     if ( b > a && b > c){
//         return b;
//     }
//     else {
//         return  c;
//     }
// }
// console.log(max (15, -25, 300))
// - створити функцію яка повертає найбільше число з масиву
// const ArrayOfNumbers = [5, 10,150,-300,555];
// arrayMax = (arr) => {
//     let result = arr[0];
//     for ( let i = 0; i < arr.length; i++) {
//         if ( result < arr[i]){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(arrayMax(ArrayOfNumbers));
// - створити функцію яка повертає найменьше число з масиву
// const ArrayOfNumbers1 = [-50, 10,150,-300,555];
// arrayMin = (arr) => {
//     let result = arr[0];
//     for ( let i = 0; i < arr.length; i++) {
//         if (result > arr[i]) {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(arrayMin(ArrayOfNumbers1));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const sum = (arr) => {
//     let result = 0;
//     for (const number of arr) {
//         result += number;
//     }
//     return result;
// }
//
// console.log(sum([1, 2, 10]));
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// fn = (n) => {
//     if (n <= 1) return 1;
//     return fn(n-1) + " " + n;
// }
// console.log(fn(11))
//
// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//  fn1 = (a, b) =>
// {
//     if (a === b)
//     {
//         return a;
//     }
//     else if (a > b)
//     {
//         return b + " " + fn1(a, b + 1)
//     }
//     if (a < b)
//     {
//         return b + " " + fn1(a, b - 1);
//     }
// }
// console.log(fn1(10, 2));
// console.log(fn1(2, 10));
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//     foo = (arr, i) => {
//     const value1 = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i+1] = value1;
//     return arr;
// }
//
// console.log(foo([9, 8, 0, 4], 0));
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo1 = (arr, i) => {
//     const value1 = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i+1] = value1;
//     return arr;
// }
//
// console.log(foo1([9, 8, 0, 4], 1));
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// foo2 = (arr, i) => {
//     const value1 = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i+1] = value1;
//     return arr;
// }
//
// console.log(foo1([9, 8, 0, 4], 2));
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
//  ArrayOfNumbers2 = [1, 0, 6, 0,3];
// array = (arr, i1, i2, i3, i4) => {
//     const value1 = arr[i1];
//     const  value2 = arr[i2];
//     const  value3 = arr[i3];
//     const  value4 = arr[i4];
//     arr[i1] = value2;
//     arr[i2] = value4;
//     arr[i3] = value3;
//     arr[i4] = value1;
//     return arr;
//
// }
// console.log(array([1, 0, 6, 0,3], 1, 2, 3, 4))
// [0,1,2,3,4] => [1,2,3,4,0]
//  ArrayOfNumbers5 = [0,1,2,3,4];
// array = (arr,i0, i1, i2, i3, i4) => {
//     const value1 = arr[i0];
//     const  value2 = arr[i1];
//     const  value3 = arr[i2];
//     const  value4 = arr[i3];
//     const  value5 = arr[i4];
//     arr[i0] = value2;
//     arr[i1] = value3;
//     arr[i2] = value4;
//     arr[i3] = value5;
//     arr[i4] = value1;
//     return arr;
//
// }
// console.log(array([0,1,2,3,4], 0,1, 2, 3, 4))
// [0,0,1,0]   => [1,0,0,0]
// ArrayOfNumbers6 = [0,0,1,0];
// array = (arr,i0, i1, i2, i3) => {
//     const value1 = arr[i0];
//     const  value2 = arr[i1];
//     const  value3 = arr[i2];
//     const  value4 = arr[i3];
//     arr[i0] = value2;
//     arr[i1] = value3;
//     arr[i2] = value4;
//     arr[i3] = value1;
//
//     return arr;
//
// }
// console.log(array([0,0,1,0], 1,0, 2, 3))