// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
let arr;

arr = [ 234, 345, -123, 0, true, 'Yulia', false, 'age', 777, -198];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log(arr.length);

//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let user1 = {
    title1: 'Romaniv',
    pageCount: 31,
    genre:'chemistry'
}
console.log(user1);

let user2 = {
    title1: 'Melanin',
    pageCount: 220,
    genre:'visit'
}
console.log(user2);

let user3 = {
    title1: 'System',
    pageCount: 188,
    genre:'It',
}
console.log(user3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let user11 = {
    title1: 'StanislavRomaniv',
    pageCount: 156,
    genre:'Literature',
    authors:[
        {name:'Diana'},
        {age:25}
]
}
console.log(user11);
let user12 = {
    title1: 'Stanislav',
    pageCount: 140,
    genre:'Math',
    authors:['name', 'age']
}
console.log(user12);

let user13 = {
    title1: 'Margo',
    pageCount: 223,
    genre:'Literature',
    authors:[
        {name:'OksanaVovk'},
        {age:42}
    ]
}
console.log(user13);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//

let users = [
    {name: 'Vasil', username: 'Buggy', password: 123456},
    {name: 'Vasil', username: 'Buggy', password: 234561},
    {name: 'Vasil', username: 'Buggy', password: 257456},
    {name: 'Vasil', username: 'Buggy', password: 123654},
    {name: 'Vasil', username: 'Buggy', password: 321654},
    {name: 'Vasil', username: 'Buggy', password: 322402},
    {name: 'Vasil', username: 'Buggy', password: 123456},
    {name: 'Vasil', username: 'Buggy', password: 123356},
    {name: 'Vasil', username: 'Buggy', password: 123445},
    {name: 'Vasil', username: 'Buggy', password: 123776},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
//
// let x = +prompt('enter num');
// console.log(x);
// if (0>x && x>0) {
//     console.log('true');
// }else {
//     console.log('false');
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// //
// let time  = +prompt('enter any number in range 0...59:');
//
// if (15 >time && time > 0) {
//     console.log('Your number from first quarter');
// }else if (30 > time && time > 15) {
//     console.log('Your number from second quarter');
// }else if (45 > time && time > 30) {
//     console.log('Your number from third quarter');
// } else if (59 > time && time > 45)
//
//     console.log('Your number from fourth quarter')


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day  = +prompt('enter any number in range 1...31:');
//
// if (10 >=day && day > 0) {
//     console.log('Your number from first decade');
// }else if (20 >= day && day > 10) {
//     console.log('Your number from second decade');
// }else if (31 >= day && day > 20)
//     console.log('Your number from third quarter');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let a = +prompt('Введть порядковий номер дня тижня');
// switch (a){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturnday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Enter number from 1 to 7');

// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x = prompt('число');
// if (x===NaN  || x===null || x===undefined) {
//     x = 'defolt';
//     console.log(x);
// }



//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray);
// ;
//
// let JavaScriptComplex = 5
// if (JavaScriptComplex > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// };
//
// let JavaComplex = 6
// if (JavaComplex > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// }
//
// let PythonComplex = 6
// if (PythonComplex > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// }
// let QAComplex = 4
// if (QAComplex > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// }
// let FullStack = 7
// if (FullStack > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// }
// let Frontend = 4
// if (Frontend > 5){
//     alert('super');
//     console.log('super')
// } else {
//     alert('eror');
//     console.log('eror')
// }

