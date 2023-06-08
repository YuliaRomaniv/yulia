
const  userId = new URL (location.href).searchParams.get('userId')

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json())
        .then((user) => {
            console.log(user)
            const block = document.getElementsByClassName('wrap')[0];
            const ul = document.createElement('ul');
            recursiveBuild(user, ul);
            block.appendChild(ul);
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
