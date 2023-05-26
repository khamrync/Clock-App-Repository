// Time-Zone //
setInterval(function () {
  let laTime = moment().tz("America/Los_Angeles").format("LTS");
  let laElement = document.querySelector(".LA-time");
  laElement.innerHTML = laTime;

  let tokyoTime = moment().tz("Asia/Tokyo").format("LTS");
  let tokyoElement = document.querySelector(".tokyo-time");
  tokyoElement.innerHTML = tokyoTime;

  let sydneyTime = moment().tz("Australia/Sydney").format("LTS");
  let sydneyElement = document.querySelector(".sydney-time");
  sydneyElement.innerHTML = sydneyTime;
}, 1000);

//Current Date//
let laElementDate = moment().tz("America/Los_Angeles").format(`MMMM Do YYYY`);

let laDate = document.querySelector(".LA-date");
laDate.innerHTML = laElementDate;

let tokyoElementDate = moment().tz("Asia/Toyko").format(`MMMM Do YYYY`);

let tokyoDate = document.querySelector(".tokyo-date");
tokyoDate.innerHTML = tokyoElementDate;

let sydneyElementDate = moment().tz("Australia/Sydney").format(`MMMM Do YYYY`);

let sydneyDate = document.querySelector(".sydney-date");
sydneyDate.innerHTML = sydneyElementDate;
