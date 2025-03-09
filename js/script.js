/* VARIABLES */

let themeSelect = document.getElementById('theme-select');

/* EVENTS */

themeSelect.addEventListener('change', () => {
	changeTheme(themeSelect.value);
});

/* FUNCTIONS */

function changeTheme(theme) {
	document.documentElement.setAttribute('data-bs-theme', theme);
}