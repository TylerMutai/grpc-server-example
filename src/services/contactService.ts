import {Contact, ContactID, ContactList, Empty} from '../protos/contacts_pb';
import {sendUnaryData, ServerUnaryCall} from '@grpc/grpc-js';

const contacts = new Map<string, Contact>();
export const addContact = (call: ServerUnaryCall<Contact, ContactID>, callback: sendUnaryData<ContactID>) => {
    const contact = call.request;
    const id = Date.now().toString();

    contact.setId(id);
    contacts.set(id, contact);

    const contactID = new ContactID();
    contactID.setId(id);

    callback(null, contactID);
}

export const getContacts = (call: ServerUnaryCall<Empty, ContactList>, callback: sendUnaryData<ContactList>) => {
    const contactList = new ContactList();
    contactList.setContactsList(Array.from(contacts.values()));
    callback(null, contactList);
}

export const updateContact = (call: ServerUnaryCall<Contact, Contact>, callback: sendUnaryData<Contact>) => {
    const contactToUpdate = call.request;
    const id = contactToUpdate.getId();

    if (contacts.has(id)) {
        contacts.set(id, contactToUpdate);
        callback(null, contactToUpdate);
    } else {
        callback(new Error(`Contact not found with ID: ${id}`));
    }
}

export const deleteContact = (call: ServerUnaryCall<ContactID, Empty>, callback: sendUnaryData<Empty>) => {
    const id = call.request.getId();

    if (contacts.has(id)) {
        contacts.delete(id);
        callback(null, new Empty());
    } else {
        callback(new Error(`Contact not found with ID: ${id}`));
    }
}