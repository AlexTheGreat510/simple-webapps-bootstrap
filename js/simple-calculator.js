/* VARIABLES */

let calcInput = document.getElementById('calc-input');
let calcButtons = document.querySelectorAll('button');

/* EVENTS */

calcButtons.forEach((button) => {

	/* button-text */
	let buttonText = button.innerText;

	/* button-click-event */
	button.addEventListener('click', () => {

		if (buttonText == 'C')
			clearCalcInput();

		else if (buttonText == '=')
			evalCalcInput();
		else
			addCalcInput(buttonText);
	});
});

/* FUNCTIONS */

function clearCalcInput() {
	calcInput.value = '';
}

function evalCalcInput()
{
	if (calcInput.value)
		calcInput.value = eval(calcInput.value);
}

function addCalcInput(value)
{
	if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%')
		calcInput.value += ' ' + value + ' ';
	else
		calcInput.value += value;
}