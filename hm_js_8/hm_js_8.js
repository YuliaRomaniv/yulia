// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
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
//
// console.log(users.filter((user) => !(user.id % 2)));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((u1, u2) => {
//       return u1.id - u2.id;
//   });
//   console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let u1 = new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[123])
// console.log(u1)
//  створити пустий масив, наповнити його 10 об'єктами Client
// let client =[
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[133, 225, 332]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[111, 1234, 125, 126, 552]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[124]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[143, 555, 333]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[153]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[163, 111]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[723, 0, 0,2]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[523]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[724, 1, 23]),
// new Client(1, 'Yulia', 'Romaniv', 'yr@ukr.net', 978544562,[525, 12,1]),
// ]
// // console.log(client);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = client.sort((client1,client2) => {
//       return client1.order.length - client2.order.length;
//   });
//   console.log(sort);
// // // //
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function CarFoo(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drivers = []
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`------INFO-----`)
//         console.log(`model: ${this.model}`);
//         console.log(`manufacturer: ${this.manufacturer}`);
//         console.log(`yearOfManufacturer: ${this.yearOfManufacture}`);
//         console.log(`maximumSpeed: ${this.maximumSpeed}`);
//         console.log(`engineCapacity: ${this.engineCapacity}`);
//         console.log(`engineCapacity: ${this.engineCapacity}`);
//         console.log(`drivers: ${JSON.stringify(this.drivers)}`)
//         console.log(`------INFO-----`)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         newSpeed = this.maximumSpeed + newSpeed;
//         this.maximumSpeed = newSpeed < 0 ? 0 : newSpeed;
//
//     }
//     this.changeYear = function (newValue){
//         this.yearOfManufacture = newValue
//     }
//       this.addDriver = function (driver) {
//         this.drivers.push(driver);
//       }
//     }
//     function Driver(name, age){
//         this.name = name;
//         this.age = age;
// }
//
//         carFoo = new CarFoo('Reno', 'Asd', 2020, 150, 2.4);
// carFoo.drive();
// carFoo.info();
// carFoo.increaseMaxSpeed(300);
// carFoo.info();
// carFoo.changeYear( 2023);
// carFoo.info();
// carFoo.addDriver({name:`Dima`,age: 65});
// carFoo.addDriver({name:`Diana`,age: 18});
// carFoo.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     class CarFoo {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drivers = [];
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)}
//
//    info = function () {
//         console.log(`------INFO-----`)
//         console.log(`model: ${this.model}`);
//         console.log(`manufacturer: ${this.manufacturer}`);
//         console.log(`yearOfManufacturer: ${this.yearOfManufacture}`);
//         console.log(`maximumSpeed: ${this.maximumSpeed}`);
//         console.log(`engineCapacity: ${this.engineCapacity}`);
//         console.log(`engineCapacity: ${this.engineCapacity}`);
//         console.log(`drivers: ${JSON.stringify(this.drivers)}`)
//         console.log(`------INFO-----`)
//     }
//
//    increaseMaxSpeed(newSpeed) {
//         newSpeed = this.maximumSpeed + newSpeed;
//         this.maximumSpeed = newSpeed < 0 ? 0 : newSpeed;
//
//     }
//     changeYear (newValue){
//         this.yearOfManufacture = newValue;
//     }
//     addDriver(driver) {
//         this.drivers.push(driver);
//     }
// }
//
// const carFoo = new CarFoo('Reno', 'Asd', 2020, 150, 2.4);
// carFoo.drive();
// carFoo.info();
// carFoo.increaseMaxSpeed(300);
// carFoo.info();
// carFoo.changeYear( 2023);
// carFoo.info();
// carFoo.addDriver({name:`Dima`,age: 65});
// carFoo.addDriver({name:`Diana`,age: 18});
// carFoo.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     class Popelushka {
//         constructor(name, age, foot) {
//             this.name = name;
//             this.age = age;
//             this.foot = foot;
//         }
//     }
//     const  popelArr = [
//         new  Popelushka(`Alina`, 22, 36),
//         new  Popelushka(`Diana`, 21, 37),
//         new  Popelushka(`Alla`, 20, 35),
//         new  Popelushka(`olja`, 25, 38),
//         new  Popelushka(`Irina`, 19, 35),
//         new  Popelushka(`Yulia`, 27, 39),
//         new  Popelushka(`Masha`, 18, 37),
//         new  Popelushka(`Inna`, 24, 35),
//         new  Popelushka(`Nadia`, 29, 36),
//         new  Popelushka(`Oksana`, 17, 38),
//     ]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Prince {
//     constructor(name, age, boot) {
//         this.name = name;
//         this.age = age;
//         this.boot = boot;
//
//     }
//     findPrincess1(arr) {
//         arr = arr.sort((a, b) => a.age - b.age);
//         for (const princess of arr) {
//             if (princess.foot === this.boot) {
//                 return princess;
//             }
//         }
//     }
//         findPrincess2(arr){
//             return  arr.find((princess) => princess.foot === this.boot)
//         }
//     }
//
// const prince = new Prince(`Oleg`, 17, 35);
// console.log(prince.findPrincess1(popelArr));
// console.log(prince.findPrincess2(popelArr));
