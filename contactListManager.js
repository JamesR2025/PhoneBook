let contactList = [];

//add contact

function addContact (contact) {
  contactList.push(contact);
  sortContacts();
  saveContactsToLocalStorage();
}

//delete contact from list and save the new list

function deleteContact (index) {
  if (index >= 0 && index < contactList.length){
    //defines the range of index being searched for
    contactList.splice(index, 1);
    //starting at index, remove one item.
    saveContactsToLocalStorage();
    //save to local storage
  }
}

function editContact (index, updatedContact) {
  if (index >=0 && index < contactList.length) {
    contactList[index] = updatedContact;
    sortContacts();
    saveContactsToLocalStorage();
  }
}

function getContactList () {
  return contactList;
}

function sortContacts () {
  contactList.sort((a,b) => a.name.localeCompare(b.name));
}

function saveContactsToLocalStorage () {
  localStorage.setItem('contacts', JSON.stringify(contactList));
}

//load contacts from local storage

function loadContactsFromLocalStorage () {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    contactList = JSON.parse(savedContacts);
  }
}



loadContactsFromLocalStorage();

//load when the app opens
//export all of these functions

console.log("contactListManager.js: Exporting functions...");

export { addContact, deleteContact, editContact, getContactList };