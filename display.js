import { addContact, deleteContact, getContactList } from './contactListManager.js';

function displayContacts() {
  const contactList = getContactList();
  const contactListElement = document.getElementById('contact-list');

  // Clear the current list
  contactListElement.innerHTML = "";

  // Display each contact
  contactList.forEach((contact, index) => {
    const contactItem = createContactItem(contact, index);
    contactListElement.appendChild(contactItem);
  });
}

function createContactItem(contact, index) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Name:</strong> ${contact.name}<br>
    <strong>Phone:</strong> ${contact.phone}<br>
    <strong>Email:</strong> ${contact.email}<br>
    <strong>Note:</strong> ${contact.note}
    <button class="delete-button" data-index="${index}">Delete</button>
    <button class="edit-button" data-index="${index}">Edit</button>`;

  const deleteButton = listItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  const editButton = listItem.querySelector('.edit-button');
  editButton.addEventListener('click', handleEditButtonClick);

  return listItem;
}

function handleDeleteButtonClick(event) {
  const index = event.target.getAttribute('data-index');
  deleteContact(index);
  displayContacts();
}

function handleEditButtonClick(event) {
  const index = event.target.getAttribute('data-index');
  // Implement edit functionality (as provided in the previous code)

  // Create input fields for editing, attach "Save" button, and replace the contact item
  const editedContactItem = createEditableContactItem(getContactList()[index], index);
  replaceContactItem(index, editedContactItem);
  attachSaveButton(index);
}

function createEditableContactItem(contact, index) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input type="text" id="edited-name-${index}" value="${contact.name}">
    <input type="text" id="edited-phone-${index}" value="${contact.phone}">
    <input type="email" id="edited-email-${index}" value="${contact.email}">
    <textarea id="edited-note-${index}">${contact.note}</textarea>
    <button class="save-button" data-index="${index}">Save</button>
  `;

  return listItem;
}

function replaceContactItem(index, newContactItem) {
  const contactListElement = document.getElementById('contact-list');
  const contactItem = contactListElement.querySelector(`li[data-index="${index}"]`);
  contactListElement.replaceChild(newContactItem, contactItem);
}

function attachSaveButton(index) {
  const saveButton = document.querySelector(`button[data-index="${index}"].save-button`);
  saveButton.addEventListener('click', handleSaveButtonClick);
}

function handleSaveButtonClick(event) {
  const index = event.target.getAttribute('data-index');
  const editedContact = {
    name: document.getElementById(`edited-name-${index}`).value,
    phone: document.getElementById(`edited-phone-${index}`).value,
    email: document.getElementById(`edited-email-${index}`).value,
    note: document.getElementById(`edited-note-${index}`).value,
  };

  // Update the contact in the contact list (you should call your editContact function here)
  editContact(index, editedContact); // Implement your editContact function

  // Re-display the contacts
  displayContacts();
}


export { displayContacts };
