//Элементы DOM дерева
let div = document.getElementById('div');
let select = document.getElementById('select');
let buts = document.querySelectorAll('button')
let timer = document.getElementById('timer')
// Создание таблицы
let table = document.createElement('table');
table.id = "table";
//Тип сортировки
let typeSort = "1";
//Инициализация наваний столбцов
let newRow = table.insertRow(0);
let newCell = newRow.insertCell(0);
newCell.innerHTML = 'Индекс'
newCell = newRow.insertCell(1);
newCell.innerHTML = 'Имя'
newCell = newRow.insertCell(2);
newCell.innerHTML = 'Фамилия'
newCell = newRow.insertCell(3);
newCell.innerHTML = 'Отчество'
newCell = newRow.insertCell(4);
newCell.innerHTML = 'Пол'
newCell = newRow.insertCell(5);
newCell.innerHTML = 'Дата рождиения'
newCell = newRow.insertCell(6);
newCell.innerHTML = 'Номер'
//Функция для заполнения таблицы
function getElinTable(obj) {
    let newRow = table.insertRow(obj.Индекс);
    let newCell = newRow.insertCell(0);
    newCell.innerHTML = obj.Индекс
    newCell = newRow.insertCell(1);
    newCell.innerHTML = obj.Имя
    newCell = newRow.insertCell(2);
    newCell.innerHTML = obj.Фамилия
    newCell = newRow.insertCell(3);
    newCell.innerHTML = obj.Отчество
    newCell = newRow.insertCell(4);
    newCell.innerHTML = obj.Пол
    newCell = newRow.insertCell(5);
    newCell.innerHTML = obj.Дата
    newCell = newRow.insertCell(6);
    newCell.innerHTML = obj.Номер
}
//Заполнение таблицы
data.forEach(element => {
    getElinTable(element)
});
//Добавление таблицы в DOM
div.appendChild(table);
//Слушатель выбора сортировка
select.addEventListener('change', function(event) {
    typeSort = select.value;
})
//Получение таблицы из DOM
table = document.getElementById('table');
//Слушатель кнопок
buts.forEach(element => {
    element.addEventListener('click', function(event) {
        sortTable(event.target.id)
    })
})
//Выбор по типу сортировки
function sortTable(id) {
    switch (typeSort) {
        case ("1"):
            sortingBubbleRow(id);
            break;
        case ("2"):
            console.log('two sort');
            break;
    }
}
//Выбор по столбцу сортировки
function sortingBubbleRow(id) {
    switch (id) {
        case ("but_1"):
            sortingBubble(0);
            break;
        case ("but_2"):
            sortingBubble(1);
            break;
        case ("but_3"):
            sortingBubble(2);
            break;
        case ("but_4"):
            sortingBubble(3);
            break;
        case ("but_5"):
            sortingBubble(4);
            break;
        case ("but_6"):
            sortingBubble(5);
            break;
        case ("but_7"):
            sortingBubble(6);
            break;
    }
}
//Сортировка пузырьком
function sortingBubble(index) {
    let tbody = table.querySelector('tbody');
    let sort = true;
    let start = new Date();
    if ((index == 0) || (index == 6)){
        for (i=1;i<2000;i++) {
            sort = true;
            for(j=1;j<=2000-i;j++) {
                if (parseInt(tbody.rows[j].cells[index].innerHTML) > parseInt(tbody.rows[j+1].cells[index].innerHTML)) {
                    tbody.insertBefore(tbody.rows[j+1], tbody.rows[j])
                    sort = false;
                }
            }
            if (sort) {
                let end = new Date();
                console.log(end-start);
                return;
            }
        }
        return;
    }
    for (i=1;i<2000;i++) {
        sort = true;
        for(j=1;j<=2000-i;j++) {
            if (tbody.rows[j].cells[index].innerHTML > tbody.rows[j+1].cells[index].innerHTML) {
                tbody.insertBefore(tbody.rows[j+1], tbody.rows[j])
                sort = false;
            }
        }
        if (sort) {
            let end = new Date();
            console.log(end-start);
            return;
        }
    }
}