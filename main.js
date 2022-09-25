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
//Функция для рисовки таблицы
function getElinTable(obj) {
    for (i = 0; i < obj.length; i++) {
        let newRow = table.insertRow(i+1);
        let newCell = newRow.insertCell(0);
        newCell.innerHTML = obj[i].Индекс
        newCell = newRow.insertCell(1);
        newCell.innerHTML = obj[i].Имя
        newCell = newRow.insertCell(2);
        newCell.innerHTML = obj[i].Фамилия
        newCell = newRow.insertCell(3);
        newCell.innerHTML = obj[i].Отчество
        newCell = newRow.insertCell(4);
        newCell.innerHTML = obj[i].Пол
        newCell = newRow.insertCell(5);
        newCell.innerHTML = obj[i].Дата
        newCell = newRow.insertCell(6);
        newCell.innerHTML = obj[i].Номер
    }
}
//Заполнение таблицы
getElinTable(data);
//Добавление таблицы в DOM
div.appendChild(table);

let buf;
buf = data[3];
data[3] = data[0];
data[0] = buf;

//Слушатель выбора сортировка
select.addEventListener('change', function(event) {
    getElinTable(data);
    typeSort = select.value;
})
/*
//Получение таблицы из DOM
table = document.getElementById('table');
//Слушатель кнопок
buts.forEach(element => {
    element.addEventListener('click', function(event) {
        sortRow(event.target.id)
    })
})
//Выбор по типу сортировки пузырьком
function sortTable(id) {
    switch (typeSort) {
        case ("1"):
            sortingBubble(id);
            break;
        case ("2"):
            sortingChoice(id);
            break;
    }
}
//Выбор по столбцу сортировки
function sortRow(id) {
    switch (id) {
        case ("but_1"):
            sortTable(0);
            break;
        case ("but_2"):
            sortTable(1);
            break;
        case ("but_3"):
            sortTable(2);
            break;
        case ("but_4"):
            sortTable(3);
            break;
        case ("but_5"):
            sortTable(4);
            break;
        case ("but_6"):
            sortTable(5);
            break;
        case ("but_7"):
            sortTable(6);
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
                timer.innerHTML = "Время: " + (end-start);
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
            timer.innerHTML = "Время: " + (end-start);
            console.log(end-start);
            return;
        }
    }
}
//Сортировка выбором
function sortingChoice(index) {
    let tbody = table.querySelector('tbody');
    let sort = true;
    let start = new Date();
    let min;
    if ((index == 0) || (index == 6)){
        for (let i=1;i<2000;i++) {
            min=i;
            sort = true;
            for(let j=i;j<2000;j++) {
                if (parseInt(tbody.rows[j].cells[index].innerHTML) > parseInt(tbody.rows[j+1].cells[index].innerHTML)) {
                    min = j+1;
                    sort = false;
                }
            }
            console.log(tbody.rows[min].cells[index].innerHTML)
            tbody.insertBefore(tbody.rows[min], tbody.rows[i]);
            if (sort) {
                let end = new Date();
                timer.innerHTML = "Время: " + (end-start);
                console.log(end-start);
                return;
            }
        }
        return;
    }
    let buf;
    console.log(data);
    for (let i=0;i<2000;i++) {
        min=i;
        sort = true;
        for(let j=i;j<2000;j++) {
            if (data[min].Имя > data[j].Имя) {
                min = j;
                sort = false;
            }
        }
        console.log(min);
        buf = data[min];
        data[min] = data[i];
        data[i] = buf;
        if (sort) {
            let end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            console.log(end-start);
            console.log(data);
            data.forEach(element => {
                getElinTable(element)
            });
            return;
        }
    }
}
*/