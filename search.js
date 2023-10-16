import { displayContacts } from './display.js';

// Function that filters and highlights based on search
function filterContacts (searchTerm) {
  const contactList = Array.from(document.querySelectorAll('#contact-list li'));

  contactList.forEach(contactItem => {
    const contactName = contactItem.querySelector('strong'); // Select the <strong> element
    if (contactName) {
      const nameText = contactName.textContent.toLowerCase();
      if (nameText.includes(searchTerm.toLowerCase())) {
        contactItem.style.backgroundColor = 'red';
      } else {
        contactItem.style.backgroundColor = ''; // Remove highlight
      }
    }
  });
}

// Event listener for search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  filterContacts(searchInput.value);
  displayContacts(); // Re-display to maintain alphabetical order
});
