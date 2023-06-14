// На странице user_Details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.



 let userId = new URL(location.href).searchParams.get('userId')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        console.log(user)
        const userDetailsDiv = document.getElementById('userDetails');
        const userDiv = document.createElement('div');
        userDiv.classList.add('userBlock');

        recursiveBuild(user, userDiv);
        userDetailsDiv.appendChild(userDiv);
    })

function createUserLinks(key, value, parent) {
    const  li = document.createElement('li');
    li.innerText = `${key}: ${value}`;
    parent.appendChild(li);
}
function  ulBuilder(key, object, parent){
    const  li = document.createElement('li');
    const  ul = document.createElement('ul');
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}

function recursiveBuild(object, parent){
    for (const key in object){
        typeof object[key] === 'object'
            ? ulBuilder(key,object[key], parent)
            : createUserLinks(key, object[key], parent)
    }
}

function displayUserPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const userPostsDiv = document.getElementById('userPosts');
            userPostsDiv.innerHTML = '';

            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('postBlock');

                const postId = post.id;
                const postTitle = post.title;

                const postLink = document.createElement('a');
                postLink.href = `../post-details/post-details.html?postId=${postId}`;
                postLink.innerText = postTitle;

                postDiv.appendChild(postLink);
                userPostsDiv.appendChild(postDiv);
            });
        })
}

