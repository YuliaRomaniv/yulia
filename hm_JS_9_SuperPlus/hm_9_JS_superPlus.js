// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let addresses = [];
for (let i = 0; i < users.length; i++) {
    addresses.push(users[i].address);
}
console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let container = document.createElement('div');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userBlock = document.createElement('div');
    userBlock.textContent = JSON.stringify(user);
    container.appendChild(userBlock);
}

document.body.appendChild(container);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let container1 = document.createElement('div');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userBlock = document.createElement('div');

    for (let prop in user) {
        let propertyBlock = document.createElement('div');
        propertyBlock.textContent = `${prop}: ${user[prop]}`;
        userBlock.appendChild(propertyBlock);
    }

    container1.appendChild(userBlock);
}

document.body.appendChild(container);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
let container2 = document.createElement('div');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userBlock = document.createElement('div');

    for (let prop in user) {
        if (prop === 'address') {
            let addressBlock = document.createElement('div');
            let address = user[prop];

            for (let addrProp in address) {
                let addrPropertyBlock = document.createElement('div');
                addrPropertyBlock.textContent = `${addrProp}: ${address[addrProp]}`;
                addressBlock.appendChild(addrPropertyBlock);
            }

            userBlock.appendChild(addressBlock);
        } else {
            let propertyBlock = document.createElement('div');
            propertyBlock.textContent = `${prop}: ${user[prop]}`;
            userBlock.appendChild(propertyBlock);
        }
    }

    container2.appendChild(userBlock);
}

document.body.appendChild(container);



// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

