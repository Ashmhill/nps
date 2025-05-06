// Import the parkInfoTemplate and footerTemplate from templates
import { footerTemplate } from "./templates.mjs";

function setHeader(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.textContent = data.fullName;
  
    document.querySelector("head > title").textContent = data.fullName;
  
    // Optional: If you're using a hero banner image
    const bannerImg = document.querySelector(".hero-banner > img");
    if (bannerImg && data.images.length > 0) {
      bannerImg.src = data.images[0].url;
    }
  
    const bannerContent = document.querySelector(".hero-banner__content");
    if (bannerContent) {
      bannerContent.innerHTML = `<h1>${data.fullName}</h1>`;
    }
  }

function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.innerHTML = footerTemplate(data);
  }

export default function setHeaderFooter(data) {
    setHeader(data);
    setFooter(data);
  }
  
  
  
