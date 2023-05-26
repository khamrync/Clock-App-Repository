//Time-Zone//
let laTime = moment()
    .tz("America/Los_Angeles")
    .format("LTS");
let laElement = document.querySelector(".LA-time");
laElement.innerHTML = laTime;


let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("LTS");
let tokyoElement = document.querySelector(".tokyo-time");
tokyoElement.innerHTML = tokyoTime;


let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("LTS");
let sydneyElement = document.querySelector(".sydney-time");
sydneyElement.innerHTML = sydneyTime;

//Current Date//
let laDate = document.querySelector(".LA-date");
laDate.innerHTML = moment().format(`MMMM Do YYYY`);

let tokyoDate = document.querySelector(".tokyo-date");
tokyoDate.innerHTML = moment().format(`MMMM Do YYYY`);

let sydneyDate = document.querySelector(".sydney-date");
sydneyDate.innerHTML = moment().format(`MMMM Do YYYY`);