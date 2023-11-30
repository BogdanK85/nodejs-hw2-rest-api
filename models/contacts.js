const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error read contacts", error.message);
    return [];
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    return contacts.find((contact) => contact.id === contactId) || null;
  } catch (error) {
    console.error("Error get contact by ID:", error.message);
    throw error;
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const updatedContactsIndex = contacts.filter(
      (contact) => contact.id !== contactId
    );

    if (updatedContactsIndex.length === contacts.length) {
      return null;
    }

    const [deletedContact] = contacts.splice(updatedContactsIndex, 1);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContactsIndex, null, 2)
    );
    return deletedContact;
  } catch (error) {
    console.error("Error remove contact", error.message);
    throw error;
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...body,
    };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error add contact", error.message);
    throw new Error("Failed to add contact");
  }
};

const updateContact = async (contactId, body) => {
  try {
    const data = await listContacts();
    const updatedContactsIndex = data.findIndex(
      (contact) => contact.id === contactId
    );

    if (updatedContactsIndex === -1) {
      return null;
    }

    data[updatedContactsIndex] = { id: contactId, ...body };

    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));

    return data[updatedContactsIndex];
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
