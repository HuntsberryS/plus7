function updateWeatherInfo(response) {
  console.log(response.data.temperature.current);
  let currentTemp = document.querySelector(".weatherNumericalValue");
  let tempDisplay = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector(".displayCity");
  cityElement.innerHTML = response.data.city;

  currentTemp.innerHTML = tempDisplay;

  let currentHumidity = document.querySelector("#humidity");
  let humidity = Math.round(response.data.temperature.humidity);

  currentHumidity.innerHTML = `The current Humidity level is ${humidity}`;

  let currentWind = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);

  currentWind.innerHTML = `The current Wind Speed is ${wind}`;
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7036a98t226cf2o3c044afd3b96a58b7&units=imperial`;
  let apiKey = "7036a98t226cf2o3c044afd3b96a58b7";
  axios.get(apiUrl).then(updateWeatherInfo);
}

function displayInputCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCity");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", displayInputCity);
