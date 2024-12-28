function showDetails(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY HH:mm A");

    let resultsCurrentDetailsElement = document.querySelector(
      "#results-current-details"
    );
    resultsCurrentDetailsElement.innerHTML = `It is ${currentTime} in ${event.target.value}`;

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let selectedCityElement = document.querySelector("#city");
selectedCityElement.addEventListener("change", showDetails);


let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".localDate");
let losAngelesTimeElement = losAngelesElement.querySelector(".localTime");

losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format(`dddd, MMMM D, YYYY`);
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format(`HH:mm:ss A`);


let phoenixElement = document.querySelector("#phoenix");
let phoenixDateElement = phoenixElement.querySelector(".localDate");
let phoenixTimeElement = phoenixElement.querySelector(".localTime");

phoenixDateElement.innerHTML = moment()
  .tz("America/Phoenix")
  .format(`dddd, MMMM D, YYYY`);
phoenixTimeElement.innerHTML = moment()
  .tz("America/Phoenix")
  .format(`HH:mm:ss A`);

let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".localDate");
let chicagoTimeElement = chicagoElement.querySelector(".localTime");

chicagoDateElement.innerHTML = moment()
  .tz("America/Chicago")
  .format(`dddd, MMMM D, YYYY`);
chicagoTimeElement.innerHTML = moment()
  .tz("America/Chicago")
  .format(`HH:mm:ss A`);

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".localDate");
let newYorkTimeElement = newYorkElement.querySelector(".localTime");

newYorkDateElement.innerHTML = moment()
  .tz("America/New_York")
  .format(`dddd, MMMM D, YYYY`);
newYorkTimeElement.innerHTML = moment().tz("America/New_York").format(`HH:mm:ss A`);

let barcelonaElement = document.querySelector("#barcelona");
let barcelonaDateElement = barcelonaElement.querySelector(".localDate");
let barcelonaTimeElement = barcelonaElement.querySelector(".localTime");

barcelonaDateElement.innerHTML = moment().tz("Europe/Barcelona").format(`dddd, MMMM D, YYYY`);
barcelonaTimeElement.innerHTML = moment().tz("Europe/Barcelona").format(`HH:mm:ss A`);

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".localDate");
let parisTimeElement = parisElement.querySelector(".localTime");

parisDateElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format(`dddd, MMMM D, YYYY`);
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format(`HH:mm:ss A`);

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".localDate");
let tokyoTimeElement = tokyoElement.querySelector(".localTime");

tokyoDateElement.innerHTML = moment()
  .tz("Asia/Tokyo")
  .format(`dddd, MMMM D, YYYY`);
tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format(`HH:mm:ss A`);

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".localDate");
let sydneyTimeElement = sydneyElement.querySelector(".localTime");

sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format(`dddd, MMMM D, YYYY`);
sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format(`HH:mm:ss A`);