let search = document.querySelector(".search");
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let value = document.querySelector(".value");
let shortDesc = document.querySelector(".short-desc");
let visibility = document.querySelector(".visibility span");
let wind = document.querySelector(".wind span");
let sun = document.querySelector(".sun span");
let time = document.querySelector(".time");
let content = document.querySelector(".content");
let body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(apiURL).then((res) => res.json());

  if (data.cod === 200) {
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + " (m)";
    wind.innerText = data.wind.speed + " (m/s)";
    sun.innerText = data.main.humidity + " (%)";
    shortDesc.innerText = data.weather[0].main;
    value.innerText = Math.floor(data.main.temp);
    time.innerText = new Date().toLocaleString("vi");
    body.setAttribute("class", "hot");
    if (value.innerText <= 25) {
      body.setAttribute("class", "cold");
    }
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI("ha noi");
