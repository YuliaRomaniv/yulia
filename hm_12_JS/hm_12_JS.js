// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//         вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => value);
}

function createUserLinks(users) {
    const userLinks = document.getElementById('user-links');
    users.forEach(user => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `user-details.html?id=${user.id}`;
        link.textContent = `${user.id} - ${user.name}`;
        link.addEventListener('click', event => {
            event.preventDefault();
            fetchUserDetails(user.id);
        });
        listItem.appendChild(link);
        userLinks.appendChild(listItem);
        link.onclick = () =>{
            location.href = `user-details..html?userId=${user.id}`
        }
    });
}

function fetchUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.error(error));
}

getUsers()
    .then(users => createUserLinks(users))
    .catch(error => console.error(error));


