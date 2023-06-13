// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// const userId = new URL (location.href).searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then((users) => {
        const userListBlock = document.getElementById('List');
       for (const user of users) {
           const userBlock = document.createElement('div');
           userBlock.classList.add('user-box');

           const userId = document.createElement('h2');
           userId.innerText = `ID: ${user.id}`;

           const userName = document.createElement('h3');
           userName.innerText = `Name: ${user.name}`;

           const userButton = document.createElement('a');
           userButton.innerText = 'More info';
           userBlock.appendChild(userButton);

           userButton.onclick = () => {

               location.href = `../user-details/user-details.html?userId=${user.id}`;
           };
           userBlock.appendChild(userId);
           userBlock.appendChild(userName);
           userBlock.appendChild(userButton);
           userListBlock.appendChild(userBlock);


       }
    })
