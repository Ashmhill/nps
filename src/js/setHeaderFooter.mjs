// Provides shared header and footer HTML for injection

const headerHTML = `
    <h1 class="page-title">Welcome to the National Parks</h1>
`;

const footerHTML = `
    <p>&copy; National Park Service</p>
`;

export function setHeader() {
    const headerElement = document.querySelector("header");
    if (headerElement) {
        headerElement.insertAdjacentHTML("beforeend", headerHTML);
    }
}

export function setFooter() {
    const footerElement = document.querySelector("footer");
    if (footerElement) {
        footerElement.insertAdjacentHTML("beforeend", footerHTML);
    }
}