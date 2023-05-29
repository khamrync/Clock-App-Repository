//Los Angeles//
function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date")
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format(`LTS`);
    };
};

function updateCity(event) {
    let cityTimeZone = event.target.value;
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

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#time-zone");
citiesSelect.addEventListener("change", updateCity);