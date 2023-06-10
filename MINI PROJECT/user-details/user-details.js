// На странице userDetails.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

// const  userId = new URL (location.href).searchParams.get('userId')
//
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(value => value.json())
//     .then((user) => {
//         console.log(user)
//         const block = document.getElementsByClassName('wrap')[0];
//         const ul = document.createElement('ul');
//         recursiveBuild(user, ul);
//         block.appendChild(ul);
//     })
//
//
// function createUserLinks(key, value, parent) {
//     const  li = document.createElement('li');
//     li.innerText = `${key}: ${value}`;
//     parent.appendChild(li);
// }
// function  ulBuilder(key, object, parent){
//     const  li = document.createElement('li');
//     const  ul = document.createElement('ul');
//     parent.appendChild(li);
//     li.appendChild(ul);
//     recursiveBuild(object, ul);
// }
//
// function recursiveBuild(object, parent){
//     for (const key in object){
//         typeof object[key] === 'object'
//             ? ulBuilder(key,object[key], parent)
//             : createUserLinks(key, object[key], parent)
//     }
// }
// Get the user ID from the query parameter in the URL
// Get the userId from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

// Fetch user details from the API based on userId
fetch(`https://jsonplaceholder.typicode.com/users/user-detail${userId}`)
    .then(response => response.json())
    .then(user => {
        console.log(user)
        const userInfo = document.getElementById('user-info');

        // Display all user information
        userInfo.innerHTML = `<h2>${user.name}</h2>
                              <p>Username: ${user.username}</p>
                              <p>Email: ${user.email}</p>
                              <p>Phone: ${user.phone}</p>
                              <p>Website: ${user.website}</p>`;
    })
    .catch(error => {
        console.log(error);
    });

// Get posts of the current user
const postButton = document.getElementById('post-button');
postButton.addEventListener('click', () => {
    // Fetch posts of the current user from the API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');

            // Display titles of all posts
            postList.innerHTML = '';
            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.classList.add('post-block');
                postBlock.innerHTML = `<h3>${post.title}</h3>`;
                postBlock.onclick = () => {
                    location.href = `post-details..html?postId=${post.id}`
                }
                // userInfo.appendChild(userBlock);
                // userBlock.appendChild(userName);
                // userBlock.appendChild(userButton);
                // userListBlock.appendChild(userBlock);

            })
        })
})



// Add a button/link for each post to navigate to post-details.html

