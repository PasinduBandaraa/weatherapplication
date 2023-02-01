const API_KEY = "c1eea0b9b6408ca1a318b035daee48a4";
const weatherApp = document.querySelector("#weather-app");
const cityInput = weatherApp.querySelector("#city-input");
const weatherResult = weatherApp.querySelector("#weather-result");

weatherApp.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const city = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].main;
      const temperature = data.main.temp;
      weatherResult.innerHTML = `The weather in ${city} is ${weather} and the temperature is ${temperature}°C.`;
    })
    .catch((error) => {
      weatherResult.innerHTML = "Could not get weather data. Please try again later.";
    });
});
