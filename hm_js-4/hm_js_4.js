// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//     function sss (a, b) {
//     a = 5;
//     b = 8;
//     result = a * b;
//     return result;
// }
// console.log(sss())
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//    function ccc (p , r) {
//     r = 5;
//     p = 3.14;
//     result = 3.14 * r * r;
//     return result;
// }
// console.log(ccc())
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function ddd (h , r) {
//     r = 5;
//     h = 10;
//     result = h * r;
//     return result;
// }
// console.log(ddd())
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function printerArray(array) {
//    for (const item of array){
//        console.log(item);
//         }
//     }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// printerArray(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     function writer(descr) {
//     document.write(`<p> ${descr}</p>`);
//     }
//    writer(`hello Diana`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function writerLi(li) {
//     document.write(`<ul>
//      <li>${li}</li>
//      <li>${li}</li>
//      <li>${li}</li>
//      </ul>`);
// }
// writerLi(`hello Diana`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function writerLi(li, number) {
//     document.write(`<ul>
//      <li>${li} ${1}</li>
//      <li>${li} ${2}</li>
//      <li>${li} ${3}</li>
//      </ul>`);
// }
// writerLi(`hello Diana`);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function printerArray( name, age, status ) {
//     document.write(`<ul>
//      <li>${name} ${age} ${status}</li>
//      </ul>`);
//     }
//
// printerArray(`Yulia`, 32, true);
// printerArray(`Diana`, 29, false);
// printerArray(`Ira`, 27, true);
// printerArray(`Stas`, 23, false);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// document.write(`8------------------8`)
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//
// ];
// function printerArrayOfObj(array) {
//     for (const users of array){
//         document.write(`<div>${users.id} ${users.name} ${ users.age} </div>`);
//     }
// }
// printerArrayOfObj(users)

// - створити функцію яка повертає найменьше число з масиву
// /

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//    function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let sum = 0;
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             sum = sumUAH / currencyValues[i].value;
//         }
//     }
//     return sum;
// }
// console.log(exchange(25000, [{currency: `USD`, value:50}, {currency: `EUR`, value: 52}], `USD`))