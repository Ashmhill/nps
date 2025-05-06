// Import function to retrieve park data
import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

//Call the function and store the result
const parkData = getParkData();

// Check that park data is loading correctly
console.log(parkData);

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `
      <h1>${data.fullName}</h1>
      <p>${data.description}</p>
    `;
  }
  
  function setParkInfoLinks(infoArray) {
    const infoEl = document.querySelector(".info");
    const html = infoArray.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
  }
  
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
  