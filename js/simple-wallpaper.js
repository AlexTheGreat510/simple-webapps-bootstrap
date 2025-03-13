/* VARIABLES */

const wallpaperImg = document.getElementById('wallpaper');
const wallpaperBtn = document.getElementById('wallpaper-btn');

/* EVENTS */

wallpaperBtn.addEventListener('click', () => {
    fetchRandomWallpaper();
});

/* FUNCTIONS */

fetchRandomWallpaper();

function fetchRandomWallpaper() {
    fetch('https://minimalistic-wallpaper.demolab.com/?random')
    .then((response) => response.blob())
    .then((blob) => {
        const wallpaperUrl = URL.createObjectURL(blob);
        wallpaperImg.src = wallpaperUrl;
  });
}