let placeNames = [
  " DUBAI",
  " SINGAPORE",
  " INDIA",
  " MALAYSIA",
  " PARIS",
  " EGYPT",
];

let index = 0;

setInterval(() => {
  document.getElementById("placeName").innerText = placeNames[index];
  if (index < placeNames.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
}, 1500);

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

document.getElementById("arrivalDate").arrivalDate.min = today;
document.getElementById("LeavingDate  ").arrivalDate.min = today;
