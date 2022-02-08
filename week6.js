let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();

let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function displayTemperature(response) {
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("h4").innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "dee8a396303897779205a09ae5f21f07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "dee8a396303897779205a09ae5f21f07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
