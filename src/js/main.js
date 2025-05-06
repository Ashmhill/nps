// Import function to retrieve park data
import { getParkData } from "./parkService.mjs";

//Call the function and store the result
const parkData = getParkData();

// Check that park data is loading correctly
console.log(parkData);

// Dynamically update the document title with the park's full name
document.title = parkData.fullName;

// Update the link text in the disclaimer with the park's name
document.querySelector(".disclaimer a").textContent = parkData.fullName;

// Update the link destination in the disclaimer
document.querySelector(".disclaimer a").href = parkData.url;

// Select the park-specific header section
const parkHeader = document.querySelector("#park-header");

// If the park has any alerts, show the alert icon
if(parkData.alerts && parkData.alerts.length > 0) {
    parkHeader.classList.add("has-alert");
}

// Update the Info icon link to point to the park's URL
parkHeader.querySelector("a").href = parkData.url;

// Import shared header and footer template loaders
import { setHeader, setFooter } from "./setHeaderFooter.mjs";

// Inject header and footer templates into the page
setHeader();
setFooter();