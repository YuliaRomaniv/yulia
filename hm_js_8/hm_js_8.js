// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// let u1 = new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562)
// console.log(u1)
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let UserOfUser = [
//  new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 975555555),
//  new User(2, 'Diana', 'Romaniv', 'dr@ukr.net', 958555555),
//  new User(3, 'Yulia', 'Romaniv', 'yr@ukr.net', 985555555),
//  new User(4, 'Diana', 'Romaniv', 'dr@ukr.net', 998555555),
//  new User(5, 'Yulia', 'Romaniv', 'yr@ukr.net', 945555555),
//  new User(6, 'Diana', 'Romaniv', 'dr@ukr.net', 938555555),
//  new User(7, 'Yulia', 'Romaniv', 'yr@ukr.net', 925555555),
//  new User(8, 'Diana', 'Romaniv', 'dr@ukr.net', 918555555),
//  new User(9, 'Yulia', 'Romaniv', 'yr@ukr.net', 905555555),
//  new User(10, 'Diana', 'Romaniv', 'dr@ukr.net', 858555555)
// ];
// console.log(UserOfUser)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let users = [
//     new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 975555555),
//     new User(2, 'Diana', 'Romaniv', 'dr@ukr.net', 958555555),
//     new User(3, 'Yulia', 'Romaniv', 'yr@ukr.net', 985555555),
//     new User(4, 'Diana', 'Romaniv', 'dr@ukr.net', 998555555),
//     new User(5, 'Yulia', 'Romaniv', 'yr@ukr.net', 945555555),
//     new User(6, 'Diana', 'Romaniv', 'dr@ukr.net', 938555555),
//     new User(7, 'Yulia', 'Romaniv', 'yr@ukr.net', 925555555),
//     new User(8, 'Diana', 'Romaniv', 'dr@ukr.net', 918555555),
//     new User(9, 'Yulia', 'Romaniv', 'yr@ukr.net', 905555555),
//     new User(10, 'Diana', 'Romaniv', 'dr@ukr.net', 858555555)
// ];
//  filteredUsers = users.filter(value => {
//      return value.id !== 5 && value.id !== 1 && value.id !== 3 && value.id !== 7 && value.id !== 9 ;
//  });
// console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((u1, u2) => {
//       return u1.id - u2.id;
//   });
//   console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, orderNumber, orderTitle) {
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [{number: orderNumber, title: orderTitle}, {number: orderNumber, title: orderTitle}, {number: orderNumber, title: orderTitle}];
    }
}
let u1 = new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}])
console.log(u1);
 // створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}]),
    new User(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[{number: 2, title:"js"}, {number: 3, title:"jJAVA"}, {number: 4,title:"C++"}])
]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort = clients.sort((u1, u2) => {
      return u1.order.number - u2.order.number;
  });
  console.log(sort);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку