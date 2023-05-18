// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// ['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => console.log(item.length));

// - Перевести до великого регістру наступні стрінгові значення
// let str = 'javascript is cool';
// console.log(str.toUpperCase());
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'lorem ipsum';
// console.log(str.toUpperCase());

// let str = 'javascript is cool';
// console.log(str.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s ='HELLO WORLD';
// console.log(s.toLowerCase());
//
// let c ='LOREM IPSUM';
// console.log(c.toLowerCase());
//
// let d ='JAVASCRIPT IS COOL';
// console.log(d.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// str =str.trim();
// console.log(str);
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str2 = 'Ревуть воли як ясла повні';
//
// const arr =  str2.split( ` `);
// console.log(arr);
//
// // є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
// arr1 = arr1.map((num) => num.toString());
// console.log(arr1);
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// const  sortNums = (nums, direction) => {
//     switch (direction) {
//         case ('ascending'):
//             return nums.sort((v1, v2) => v1 - v2)
//         case ('descending'):
//             return nums.sort((v1, v2) => v2 - v1)
//     }
// };
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
//
//
// // ==========================
// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const arr6 = coursesAndDurationArray.sort ((v1,v2) => {
//          v2.monthDuration - v1.monthDuration;
// });
// console.log(arr6);
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// const arr5 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(arr5);
//
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// //
// const arr3 = coursesAndDurationArray.map(function (value, index) {
//     return {id: index + 1,...value};
// });
// console.log(arr3);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
const card1 = cards.find((card) => card.cardSuit === `spade` && card.value ===`ace`);
console.log(card1);
// - всі шістки
const card2 = cards.filter((card) =>  card.value ===`6`);
console.log(card2);
// - всі червоні карти
const card3 = cards.filter((card) =>  card.color ===`red`);
console.log(card3);
// - всі буби
const card4 = cards.filter((card) =>  card.cardSuit ===`diamond`);
console.log(card4);
// - всі трефи від 9 та більше
const card5 = cards.filter((card) =>  ['9',`10`,'jack','queen','king', 'ace'].includes(card.value) && card.cardSuit ===`clubs`);
console.log(card5);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const arr8 = cards.reduce((acc, cu) =>{
switch (cu.cardSuit){
    case `spade`:
        acc.spades.push(cu);
        break;
    case `diamond`:
        acc.diamonds.push(cu);
        break;
    case `heart`:
        acc.hearts.push(cu);
        break;
    case `clubs`:
        acc.clubs.push(cu);
        break;
}
return acc
}, {spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(arr8);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const arr12 = coursesArray.filter((item) => item.modules.includes(`sass`));
console.log(arr12);

// --написати пошук всіх об'єктів, в який в modules є docker
const arr13 = coursesArray.filter((item) => item.modules.includes(`docker`));
console.log(arr13);