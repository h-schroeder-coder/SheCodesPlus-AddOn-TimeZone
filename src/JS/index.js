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
