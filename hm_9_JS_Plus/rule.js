// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


const contentDiv = document.getElementById('content');

const headings = document.querySelectorAll('h2');

const ul = document.createElement('ul');

for (let i = 0; i < headings.length; i++) {
    const heading = headings[i].textContent;

    const li = document.createElement('li');
    li.textContent = heading;
    ul.appendChild(li);
}


contentDiv.appendChild(ul);