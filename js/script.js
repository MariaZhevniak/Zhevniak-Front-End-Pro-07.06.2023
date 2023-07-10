const table = document.createElement('table');

let cellCounter = 1;

for(let i = 0; i < 10; i++) {
	const row = document.createElement('tr');
	
	for(let j = 0; j < 10; j++) {
		
		const cell = document.createElement('td');
		cell.innerText = cellCounter;
		row.appendChild(cell);
		cellCounter++;
	}

	table.appendChild(row);
}

document.body.appendChild(table);