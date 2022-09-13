function createTable() {
    let x = 25;
    for (let i = 0; i < x; i++) {
        if ((i % 5) === 0) {
            createRow(i);
        } else {
            createCell(i);
        }
    }
}

function createRow(i) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let table = document.getElementById('thetable')

    tr.classList = 'row';
    tr.id = `${i / 5}`;
    td.classList = 'album';
    td.id = 'td' + `${i}`;
    td.setAttribute('background', `./images/image${i+1}.png`);

    tr.appendChild(td);
    table.appendChild(tr);
}

function createCell(i) {
    let td = document.createElement('td');
    let trID = Math.floor(i / 5)

    td.classList = 'album';
    td.id = 'td' + `${i}`;
    td.setAttribute('background', `./images/image${i+1}.png`);

    document.getElementById(trID).appendChild(td);

}

createTable()

// function addRow(i) {
//     let row = document.createElement('tr');
//     let rowBefore = document.getElementById(`${i}`)
//     row.innerText = 'test';

//     rowBefore.after(row);
// }