//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=879431&appid=a7163999040e65fca8574bedafc98106&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
  document.getElementById('place').innerHTML = weatherInfo.name;  
  document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp; 
  document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed; 


  const iconcode = weatherInfo.weather[0].icon;
  const icon_path = "//openweathermap.org/img/w/" +iconcode + ".png";
  console.log(icon_path);

  document.getElementById('weather_icon').src = icon_path; 

 }); //end of "then" fat arrow function



