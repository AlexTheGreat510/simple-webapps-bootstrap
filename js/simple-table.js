/* VARIABLES */

const table = document.getElementById('table');
const tableEnd = document.getElementById('table-end');
const tableStart = document.getElementById('table-start');
const tableGenBtn = document.getElementById('table-gen-btn');
const tableContainer = document.getElementById('table-container');

/* EVENTS */

tableGenBtn.addEventListener('click', () => {
	generateTable();
});

/* FUNCTIONS */

function generateTable()
{
	if (table.value && tableEnd.value && tableStart.value)
	{
		tableContainer.innerHTML = '';

		for (let tableCount=tableStart.value; tableEnd.value>=tableCount; tableCount++)
		{
			tableContainer.innerHTML += `<tr class="fs-4">
											<td class="text-center">${table.value}</td>
											<td class="text-center text-secondary">x</td>
											<td class="text-center">${tableCount}</td>
											<td class="text-center text-secondary">=</td>
											<td class="text-center">${table.value * tableCount}</td>
										 </tr>`;
		}
	}
}