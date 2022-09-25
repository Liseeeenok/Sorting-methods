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
function createElinTable(obj) {
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
//Перерисовка таблицы
function redrawingElinTable(obj) {
    for (i = 0; i < obj.length; i++) {
        table.deleteRow(i+1);
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
createElinTable(data);
//Добавление таблицы в DOM
div.appendChild(table);
//Слушатель выбора сортировка
select.addEventListener('change', function(event) {
    typeSort = select.value;
})
//Получение таблицы из DOM
table = document.getElementById('table');
let tbody = table.querySelector('tbody');
//Слушатель кнопок
buts.forEach(element => {
    element.addEventListener('click', function(event) {
        sortTable(event.target.id)
    })
})
//Выбор по типу сортировки пузырьком
function sortTable(id) {
    switch (typeSort) {
        case ("1"):
            sortBubbleRow(id);
            break;
        case ("2"):
            sortingChoice(id);
            break;
    }
}
//Выбор по столбцу сортировки пузырьком
function sortBubbleRow(id) {
    let buf;
    let sort;
    let start = new Date();
    switch (id) {
        case ("but_1"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Индекс > data[j+1].Индекс) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_2"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Имя > data[j+1].Имя) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_3"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Фамилия > data[j+1].Фамилия) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_4"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Отчество > data[j+1].Отчество) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_5"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Пол > data[j+1].Пол) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_6"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Дата > data[j+1].Дата) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
        case ("but_7"):
            for (i=0;i<2000;i++) {
                sort = true;
                for(j=0;j<1999-i;j++) {
                    if (data[j].Номер > data[j+1].Номер) {
                        buf = data[j];
                        data[j] = data[j+1];
                        data[j+1] = buf;
                        sort = false;
                    }
                }
                if (sort) {
                    let end = new Date();
                    timer.innerHTML = "Время: " + (end-start);
                    redrawingElinTable(data);
                    return;
                }
            }
            break;
    }
}
//Выбор по столбцу сортировки пузырьком
function sortingChoice(id) {
    let buf;
    let min;
    let end;
    let start = new Date();
    switch (id) {
        case ("but_1"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Индекс > data[j].Индекс) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_2"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Имя > data[j].Имя) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_3"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Фамилия > data[j].Фамилия) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_4"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Отчество > data[j].Отчество) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_5"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Пол > data[j].Пол) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_6"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Дата > data[j].Дата) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
        case ("but_7"):
            for (i=0;i<2000;i++) {
                min = i;
                sort = true;
                for(j=i;j<2000;j++) {
                    if (data[min].Номер > data[j].Номер) {
                        min = j;
                    }
                }
                if (min != i) {
                    buf = data[i];
                    data[i] = data[min];
                    data[min] = buf;
                }
            }
            end = new Date();
            timer.innerHTML = "Время: " + (end-start);
            redrawingElinTable(data);
            break;
    }
}