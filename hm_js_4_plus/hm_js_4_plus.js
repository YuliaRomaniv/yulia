// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a < b && a < c) {
//         return a;
//     }
//     if (b < a && b <c){
//         return b;
//     }
//
//     else {
//         return c;
//     }
// }
// console.log(min(2, -2,150));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     }
//     if (b > a && b > c){
//         return b;
//     }
//
//     else {
//         return c;
//     }
// }
// console.log(max(2, -2,150));
// - створити функцію яка повертає найбільше число з масиву
// const ArrayOfNumbers = [11,-22,33,-33,100,555];
// function ArrayMax(arr){
//     let result = arr[0];
//     for ( let i = 0; i < arr.length; i++) {
//         if ( result < arr[i]){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(ArrayMax(ArrayOfNumbers));
// - створити функцію яка повертає найменьше число з масиву
// const ArrayOfNumbers = [11,22,33,-33,100,555];
// function ArrayMin(arr){
//     let result = arr[0];
//     for ( let i = 0; i < arr.length; i++) {
//         if ( result > arr[i]){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(ArrayMin(ArrayOfNumbers));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function ddd ([a , b, c, d]) {
//     result = (a+b+c+d)/4;
//     return result;
// }
// console.log(ddd([5, 10, 15, 30]))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//    const  ArrayOfNumber1 = [5, -5 , -15, 10 , 100]
//    function ArrayMax(arr){
//     let min = arr[0];
//     let max = 0;
//     for ( let i = 0; i < arr.length; i++) {
//             if ( arr[i] < min)
//                min = arr[i];
//             if ( arr[i] > max){
//                max = arr[i];
//                console.log(max)
//             }
//
//         }
//     return min;
//
//
// }
//
// console.log(ArrayMax(ArrayOfNumber1));



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomArray() {
//     let random = [];
//     for ( let i = 0; i < 10; i++ ) {
//         random.push(Math.round(Math.random() * 100));
//     }
//     return random;
// }
// console.log(randomArray())
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function swap(arr){
//      const value1 = arr[0];
//      const value2 = arr[1]
//      const value3 = arr[2];
//      arr[2] = value1;
//      arr[0] = value3;
//      return arr;
//     }
//     console.log(swap([1,2,3,]));
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function foobar() {
//     console.log(arguments);
//     if (arguments.length === 1) {
//         return arguments[0] ;
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1] ;
//
//     }
// }
// console.log(foobar(10));
// console.log(foobar(10, 20));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//     function swap(arr, arr1){
//     result = [arr[0]+arr1[0], arr[1]+arr1[1], arr[2]+arr1[2], arr[3]+arr1[3]];
//     return result;
// }
// console.log(swap([1,2,3,4], [2,3,4,5]));
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// document.write(`8------------------8`)
// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// ;
// function printerArrayOfObj(array) {
//     for (const user of array){
//         document.write(`<div>${user.name}, ${user.age}, ${ user.model} </div>`);
//     }
// }
// printerArrayOfObj(user);
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//  document.write(`8------------------8`)
// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// ;
// function printerArrayOfObj(array) {
//     for (const user of array){
//         document.write(`<div>${user.name}, ${user.age}, ${ user.model} </div>`);
//     }
// }
// printerArrayOfObj(user);
