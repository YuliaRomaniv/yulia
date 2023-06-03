// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//     const form= document.forms.f1;
//
//     form.onsubmit = function (e){
//     e.preventDefault();
//
//     const  wrapper = document.createElement('div');
//     const name = document.createElement('div');
//     const  surname = document.createElement('div');
//     const  age = document.createElement('div');
//     name.innerText = `name: ${this.name.value}`;
//     surname.innerText = `surname: ${this.surname.value}`;
//     age.innerText = `age: ${this.age.value}`;
//     this.name.value = '';
//     this.surname.value = '';
//     this.age.value = '';
//     wrapper.append(name, surname, age);
//     document.body.appendChild(wrapper);
// }

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію.
// const  json = localStorage.getItem('sessions');
// const sessions = json ? JSON.parse(json): [];
//  sessions.push({
//      date : new Date().toISOString(),
//  });
//  localStorage.setItem(sessions, JSON.stringify(sessions));
//
// // =========================
// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//  const  block = document.createElement('div');
//  const  button = document.createElement('div');
//
//  block.innerText = 'Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.\n' +
//      ' При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.'
//
//  button.innerText = 'CLICK';
//  button.onclick = () => block.style.display = 'none';
//  document.body.append(block, button);
// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//  const  form = document.forms.checker;
//  form.onsubmit = function (e){
//      e.preventDefault();
//      if( this.age.value <18){
//        return alert('Go');
//      }
//      return alert('Welcome');
//  }
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const  form = document.forms.creator;
form.onsubmit = function (e){
    e.preventDefault();
    const  table = document.createElement('div');
    for (let i = 0; i < this.row.value; i++){
        console.log(creator);
        const tr = document.createElement('tr');
        for (let j = 0; j < this.column.value; i++){
            const td = document.createElement('tr');
            td.innerText = this.content.value;
            tr.appendChild('td');
    }

table.appendChild('tr');
    }
    document.body.appendChild()
}


//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається