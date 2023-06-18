// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

// Отримуємо посилання на елемент з id="wrap"
const wrapDiv = document.getElementById('wrap');

// Ітеруємося через кожне правило у масиві rules
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    // Створюємо елементи блоків для заголовка та тексту правила
    const ruleDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');

    // Задаємо класи для стилізації блоків
    ruleDiv.className = 'rules rule' + (i + 1);
    titleDiv.className = 'rule-title';
    bodyDiv.className = 'rule-body';

    // Додаємо номер правила до блоку ruleDiv
    const ruleNumber = document.createElement('div');
    ruleNumber.className = 'rule-number';
    ruleNumber.textContent = (i + 1);
    ruleDiv.appendChild(ruleNumber);

    // Додаємо заголовок правила до блоку titleDiv
    const title = document.createElement('h2');
    title.textContent = rule.title;
    titleDiv.appendChild(title);

    // Додаємо текст правила до блоку bodyDiv
    const body = document.createElement('p');
    body.textContent = rule.body;
    bodyDiv.appendChild(body);

    // Додаємо блоки з номером, заголовком та текстом правила до блоку ruleDiv
    ruleDiv.appendChild(titleDiv);
    ruleDiv.appendChild(bodyDiv);

    // Додаємо блок правила до блоку wrapDiv
    wrapDiv.appendChild(ruleDiv);
}