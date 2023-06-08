// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
        const userListBlock = document.getElementById('List');
        users.forEach((user)=> {
            const userBlock = document.createElement('div');
            const userId = document.createElement('p');
            userId.innerText = `ID: ${user.id}`;
            const userName = document.createElement('p');
            userName.innerText = `Name: ${user.name}`;
            userBlock.appendChild(userId);
            userBlock.appendChild(userName);
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            const button = document.createElement('button');
            button.innerText = 'More info';
            button.onclick = () => {
                location.href = `user-details.html?userId=${user.id}`;
            };

            userBlock.appendChild(button);

            userListBlock.appendChild(userBlock);
        });
    })
    .catch(error => {
        console.log(error);
    });
