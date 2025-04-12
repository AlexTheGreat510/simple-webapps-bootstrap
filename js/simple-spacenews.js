/* VARIABLES */

const spaceNewsLayout = document.getElementById('layout-select');
const spaceNewsContainer = document.getElementById('simple-spacenews-container');

/* EVENTS */

spaceNewsLayout.addEventListener('change', () => {
	spaceNewsContainer.setAttribute('class', `${spaceNewsLayout.value}-layout`)
});

/* FUNCTIONS */

fetchSpaceFlightApi();

function updateNews(news)
{
	news['results'].forEach((news) => {
		spaceNewsContainer.innerHTML += `<div class="mb-5 card">
  											<img src="${news['image_url']}" class="card-img-top" alt="${news['title']}">
  											<div class="card-body">
    											<h5 class="card-title">${news['title']}</h5>
    											<p class="card-text">${news['summary']}</p>
												<h6 class="mb-3 card-subtitle text-body-secondary"><i class="bi bi-browser-firefox"></i> ${news['news_site']}</h6>
												<h6 class="mb-3 card-subtitle text-body-secondary"><i class="bi bi-calendar-check-fill"></i> ${news['published_at']}</h6>
    											<a href="${news['url']}" class="btn btn-primary">Go to news article</a>
  											</div>
									     </div>`;
	});
}

async function fetchSpaceFlightApi()
{
 	const url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json";

  	try {
    	const response = await fetch(url);

    	if (!response.ok) {
    		throw new Error(`Response status: ${response.status}`);
    	}

    	const json = await response.json();
    	console.log(json);
    	updateNews(json);

  	} catch (error) {
		console.error(error.message);
		alert("Unable to fetch spaceflight api!");
  	}
}