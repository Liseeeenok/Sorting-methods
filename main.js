console.log('work!');

let div = document.getElementById('div');
let select = document.getElementById('select');
let buts = document.querySelectorAll('button')

let table = document.createElement('table');
table.id = "table";

let newRow = table.insertRow(0);
let newCell = newRow.insertCell(0);

let typeSort = 1;

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

div.appendChild(table);

select.addEventListener('change', function(event) {
    typeSort = select.value;
})

table = document.getElementById('table');
console.log(buts)

let test = table.querySelector('tbody')
console.log(test)
setTimeout(test.insertBefore(test.rows[3], test.rows[2]), 2000)
test.insertBefore(test.rows[3], test.rows[2]);
test.insertBefore(test.rows[10], test.rows[2]);
test.insertBefore(test.rows[12], test.rows[2]);
test.insertBefore(test.rows[12], test.rows[2]);
/*
while (true) {
    if (table.moveRow) {        // Internet Explorer
        setTimeout(table.moveRow (2, 3), 2000);
    } 
    else {        // Cross browser
        let test = table.getElementsByTagName('tbody')
        console.log(table.getElementsByTagName('tbody'))
        test[0].id = "awdwada"
        console.log(test[0].rows[2]);
        setInterval(test[0].insertBefore(test[0].rows[3], test[0].rows[2]), 200000);
    }
}*/