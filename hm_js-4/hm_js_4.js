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
// function writerLi(text, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i< count; i ++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// writerLi(`Hello Diana`, 2);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const  arr = [25, -125, `Diana`, true, 125, `Romaniv`]
// function writerLi1(text) {
//     document.write(`<ul>`);
//     for (const item of arr){
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// writerLi1(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// document.write(`8------------------8`)
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},

];
// function printerArrayOfObj(array) {
//     for (const users of array){
//         document.write(`<div>${users.id} ${users.name} ${ users.age} </div>`);
//     }
// }
// printerArrayOfObj(users)

// - створити функцію яка повертає найменьше число з масиву
// /
// const ArrayOfNumbers = [11,-22,9,-58,55,10];
// function ArrayMin(arr){
    let result = arr[0];
    for ( let i = 0; i < arr.length; i++) {
        if ( result > arr[i]){
            result = arr[i];
        }
    }
    return result;
}
console.log(ArrayMin(ArrayOfNumbers));
// - створити функцію sum(arr), ка приймає масив чиселб сумує значення елементів масиву та повертає його. Приклад sum([1,2,10])
//  function sum(arr){
//     let result = 0;
//     for(const  number of arr){
//         result += number;
//     }
//     return result
//  }
//  console.log(sum([1, 2, 10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//     function swap(arr,index1,index2){
//      const value1 = arr[index1];
//      const value2 = arr[index2];
//      arr[index1] = value2;
//      arr[index2] = value1;
//      return arr;
//     }
//     console.log(swap([11,22,33,44],0,1));

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