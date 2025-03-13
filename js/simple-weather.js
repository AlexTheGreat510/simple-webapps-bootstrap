/* VARIABLES */

let weatherCity = document.getElementById('city');
let weatherWind = document.getElementById('wind');
let weatherTemp = document.getElementById('temprature');
let weatherDesc = document.getElementById('description');
let weatherCitySelect = document.getElementById('weather-city')

/* EVENTS */

weatherCitySelect.addEventListener('change', () => {
	fetchWeatherApi();
});

/* FUNCTIONS */

function updateWeatherInfo(info)
{
	weatherWind.innerText = info.wind;
	weatherTemp.innerText = info.temperature;
	weatherDesc.innerText = info.description;
	weatherCity.innerText = weatherCitySelect.value;
}

async function fetchWeatherApi()
{
 	const url = `https://goweather.herokuapp.com/weather/${weatherCitySelect.value}`;

  	try {
    	const response = await fetch(url);

    	if (!response.ok) {
    		throw new Error(`Response status: ${response.status}`);
    	}

    	const json = await response.json();
    	console.log(json);
    	updateWeatherInfo(json);

  	} catch (error) {
		console.error(error.message);
		alert("Unable to fetch api!");
  	}
}