// select HTML elements in the document
const apiURL =  "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=a7163999040e65fca8574bedafc98106&units=imperial";


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

 async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const firstsub = desc.substring(0, desc.indexOf(' '));
  const firstSubUpper  = firstsub.charAt(0).toUpperCase() + firstsub.slice(1);
  const secsub = desc.substring(desc.indexOf(' ') + 1);
  const secSubUpper  = secsub.charAt(0).toUpperCase() + secsub.slice(1);
  const combined = `${firstSubUpper} ${secSubUpper}`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = combined;
}