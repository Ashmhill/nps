// Template for media cards in the info section
export function mediaCardTemplate(info) {
    return `
      <div class="media-card">
        <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}" />
          <h3>${info.name}</h3>
        </a>
        <p>${info.description}</p>
      </div>
    `;
  }
  
// Helper to find the mailing address
function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
  }
  
  // Helper to find the voice phone number
  function getVoicePhone(phoneNumbers) {
    return phoneNumbers.find((phone) => phone.type === "Voice").phoneNumber;
  }
  
  // Template for the park contact footer
  export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `
      <section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div>
          <p>${mailing.line1}</p>
          <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
        </div>
        <h4>Phone:</h4>
        <p>${voice}</p>
      </section>
    `;
  }
  