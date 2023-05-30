function updateTime(cityTimeZone) {
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(`LTS`)}</div>
    </div>
  `;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  updateTime(cityTimeZone);

  setInterval(function () {
    updateTime(cityTimeZone);
  }, 1000);
}

let citiesSelect = document.querySelector("#time-zone");
citiesSelect.addEventListener("change", updateCity);