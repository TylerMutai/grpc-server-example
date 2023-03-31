import {ContactService, ContactServiceClient} from "../protos/contacts_pb_service";
import {Contact} from "../protos/contacts_pb";

const host = "localhost:5091";
const client = new ContactServiceClient(host);

const contact = new Contact();
contact.setName("Don Pascal");
contact.setEmail("dp@pscl.com");
contact.setPhone("1234567890");


client.addContact(contact, (err, response) => {
    if (err) {
        console.error(err);
    } else {
        console.log(response.getId());
    }
})