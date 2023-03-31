import { Empty, Contact, ContactList, ContactID } from '../protos/contacts_pb';
import { ContactService, IContactServer } from '../protos/contacts_grpc_pb';
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';

export class ContactServiceImpl implements IContactServer {
    private contacts: Map<string, Contact>;

    constructor() {
        this.contacts = new Map<string, Contact>();
    }

    addContact(call: ServerUnaryCall<Contact>, callback: sendUnaryData<ContactID>): void {
        const contact = call.request;
        const id = Date.now().toString();

        contact.setId(id);
        this.contacts.set(id, contact);

        const contactID = new ContactID();
        contactID.setId(id);

        callback(null, contactID);
    }

    getContacts(call: ServerUnaryCall<Empty>, callback: sendUnaryData<ContactList>): void {
        const contactList = new ContactList();
        contactList.setContacts(Array.from(this.contacts.values()));

        callback(null, contactList);
    }

    updateContact(call: ServerUnaryCall<Contact>, callback: sendUnaryData<Contact>): void {
        const contactToUpdate = call.request;
        const id = contactToUpdate.getId();

        if (this.contacts.has(id)) {
            this.contacts.set(id, contactToUpdate);
            callback(null, contactToUpdate);
        } else {
            callback(new Error(`Contact not found with ID: ${id}`));
        }
    }

    deleteContact(call: ServerUnaryCall<ContactID>, callback: sendUnaryData<Empty>): void {
        const id = call.request.getId();

        if (this.contacts.has(id)) {
            this.contacts.delete(id);
            callback(null, new Empty());
        } else {
            callback(new Error(`Contact not found with ID: ${id}`));
        }
    }
}