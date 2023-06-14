// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetailsDiv = document.getElementById('postDetails');
        const postDiv = document.createElement('div');
        postDiv.classList.add('postBlock');

        const postId = post.id;
        const postTitle = post.title;
        const postBody = post.body;

        const postContent = document.createElement('p');
        postContent.innerHTML = `<strong>Post ID:</strong> ${postId}<br>
                                 <strong>Title:</strong> ${postTitle}<br>
                                 <strong>Body:</strong> ${postBody}`;

        postDiv.appendChild(postContent);
        postDetailsDiv.appendChild(postDiv);
    })


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const postCommentsDiv = document.getElementById('postComments');
        postCommentsDiv.innerHTML = '';

        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('commentBlock');

            const commentId = comment.id;
            const commentName = comment.name;
            const commentEmail = comment.email;
            const commentBody = comment.body;

            const commentContent = document.createElement('p');
            commentContent.innerHTML = `<strong>Comment ID:</strong> ${commentId}<br>
                                      <strong>Name:</strong> ${commentName}<br>
                                      <strong>Email:</strong> ${commentEmail}<br>
                                      <strong>Body:</strong> ${commentBody}`;

            commentDiv.appendChild(commentContent);
            postCommentsDiv.appendChild(commentDiv);
        });
    })
