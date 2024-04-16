function updateWeatherInfo(response) {
  let currentTemp = document.querySelector(".weatherNumericalValue");
  let tempDisplay = Math.round(response.data.temperature.current);
  currentTemp.innerHTML = `${tempDisplay}`;

  let cityElement = document.querySelector(".displayCity");
  cityElement.innerHTML = response.data.city;

  let mainWeather = document.querySelector(".weatherIcon");
  mainWeather.innerHTML = `<img src="${response.data.condition.icon_url}">`;

  let currentHumidity = document.querySelector("#humidity");
  let humidity = Math.round(response.data.temperature.humidity);
  currentHumidity.innerHTML = `The current Humidity level is ${humidity}%`;

  let currentWind = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  currentWind.innerHTML = `The current Wind Speed is ${wind}mph`;

  let dateAndTimeDisplay = document.querySelector("#dateAndTime");
  let date = new Date(response.data.time * 1000);
  dateAndTimeDisplay.innerHTML = `Last updated ${formatDate(date)}`;

  infoPull(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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
function infoPull(city) {
  let apiKey = "7036a98t226cf2o3c044afd3b96a58b7";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(forecastLoop);
}

function forecastLoop(response) {
  let forecastPrediction = "";

  function updateDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tues", " Wed", "Thurs", "Fri", "Sat"];

    return days[date.getDay()];
  }
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastPrediction =
        forecastPrediction +
        `
        
        
        <div class="weatherForcast"> 
          <div class="dayOfWeek"> ${updateDay(day.time)}</div>
          
            <span >
            <img src="${day.condition.icon_url}"class="symbols">
            </span>
            
            <div class="forcastTemp"> <span id= "high"> ${Math.round(
              day.temperature.maximum
            )} </span> <span id="low"> ${Math.round(
          day.temperature.minimum
        )}</span> </div>
        </div>`;
    }
  });

  let forecastElement = document.querySelector(".containerMini");
  forecastElement.innerHTML = forecastPrediction;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", displayInputCity);

searchCity("Martinsburg");
