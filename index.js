function searchWeather(event) {
  event.preventDefault();
  let input = document.querySelector("#searchCity");
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = input.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);
