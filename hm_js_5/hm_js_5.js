// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//    const sss = (a, b) => {
//     return  a * b;
// }
// const sr = sss(10 , 5)
// console.log(sr)
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// const sCir = (r) => {
//     return Math.PI * r ** 2;
// }
// const rCir = sCir(10);
// console.log(rCir);
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const sCil = (r, h) => {
//     return Math.PI * 2 * r * h;
// }
//
// const rCil = sCil(10, 5);
// console.log(rCil);
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// const array = [23, 444, 'sdfsdfdsf', true];
//
// const arrPrinter = (arr)=> {
//     for (const item of arr) {
//         console.log(`item: ${item}`)
//     }
// }
//
// arrPrinter(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const pCrt = (text, esad) => {
//     document.write(`<${esad}>${text}</${esad}>`);
// }
//
// pCrt('HELLO DIANA!!', 'h1');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const ulCrt1 = (text)=> {
//     document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
//     `);
// }
//
// ulCrt1('HELLO DIANA!!');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const ulCrt2 = (text, count)=> {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// ulCrt2('HELLO DIANA!!', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const arr = [23, -554, 'Diana', true, 'Romaniv', 'Lviv'];
//
// const ulCreator = (arr)=> {
//     document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// ulCreator(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const users = [
//         {name: 'vasya', age: 31, id: 1},
//         {name: 'petya', age: 30, id: 2},
//         {name: 'kolya', age: 29, id: 3},
//         {name: 'olya', age: 28, id: 4},
//         {name: 'max', age: 30, id: 5},
//
//     ];
//
//  usersPrinter = (arr) =>{
//     for (const user of arr) {
//         document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`);
//     }
// }
//
// usersPrinter(users);

// - створити функцію яка повертає найменьше число з масиву
//  const ArrayOfNumbers = [11,-22,9,-58,55,10];
//  arrayMin = (arr) => {
//     let result = arr[0];
//     for ( let i = 0; i < arr.length; i++) {
//         if ( result > arr[i]){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(arrayMin(ArrayOfNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
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
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap = (arr, index1, index2) => {
//     const value1 = arr[index1];
//     const value2 = arr[index2];
//     arr[index1] = value2;
//     arr[index2] = value1;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));

//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//     }
// }
//
// const result = exchange(
//     10000,
//     [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
//     'USD'
// );
// console.log(result);