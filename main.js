console.log('work!');

let div = document.getElementById('div');

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

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

data.forEach(element => {
    getElinTable(element)
});
console.log(data)


/*
newRow = table.insertRow(1);
newCell = newRow.insertCell(0);

newCell.innerHTML = 'Test 2'
newCell = newRow.insertCell(1);
newCell.innerHTML = 'Test 4'
*/
div.appendChild(table);