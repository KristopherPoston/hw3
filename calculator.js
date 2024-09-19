console.log("HELLO WORLD!!!!!!");

let isTrue = true;
let results = [];


function createTable(headers, rows) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    rows.forEach(rowData => {
        let row = document.createElement('tr');
        row.innerHTML = rowData.map(cell => `<td>${cell}</td>`).join('');
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.margin = '10px 0';

    
    headerRow.style.backgroundColor = '#004d00'; 
    headerRow.style.color = 'white';

    
    Array.from(table.querySelectorAll('th')).forEach(th => {
        th.style.border = '1px solid #004d00'; 
        th.style.padding = '8px';
    });

    Array.from(table.querySelectorAll('td')).forEach(td => {
        td.style.border = '1px solid #004d00'; 
        td.style.padding = '8px';
        td.style.backgroundColor = '#b3ffb3'; 
    });

    document.body.appendChild(table);
}

while (isTrue) {
    let x = prompt("Enter a number:");
    if (x === null) {
        break;
    }
    x = parseFloat(x);

    let y = prompt("Enter another number:");
    if (y === null) {
        break;
    }
    y = parseFloat(y);

    let operation = prompt("Enter an operation: * / + - %");
    if (operation === null) {
        break;
    }

    let result;
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        if (operation === '+') {
            result = x + y;
        } else if (operation === '-') {
            result = x - y;
        } else if (operation === '*') {
            result = x * y;
        } else if (operation === '/') {
            result = (y !== 0) ? x / y : "Error: Division by zero";
        } else if (operation === '%') {
            result = (y !== 0) ? x % y : "Error: Division by zero";
        } else {
            result = "Error: Invalid operator";
        }
    }

    createTable(
        ['Number 1', 'Operator', 'Number 2', 'Result'],
        [[x, operation, y, result]]
    );

    results.push(result);
}

let validResults = results.filter(res => !isNaN(res) && typeof res === 'number');

if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((acc, val) => acc + val, 0);
    let avg = total / validResults.length;

    createTable(
        ['Minimum', 'Maximum', 'Average', 'Total'],
        [[min, max, avg, total]]
    );
}
