const interceptors = require('grpc-interceptors');
import {Server, ServerCredentials} from '@grpc/grpc-js';
import {ContactServiceService} from "./protos/contacts_grpc_pb";
import {AuthServiceService} from "./protos/auth_grpc_pb";
import {addContact, deleteContact, getContacts, updateContact} from "./services/contactService";
import {login} from "./services/authService";

const port = `localhost:${process.env.PORT || 5000}`;
const server = interceptors.serverProxy(new Server());
server.addService(ContactServiceService, {
    addContact,
    getContacts,
    updateContact,
    deleteContact
});

server.addService(AuthServiceService, {
    login
});

const checkAuthorizationToken = async function (ctx, next) {

    // do stuff before call
    console.log('Making gRPC call...');
    console.log(ctx)

    await next()

    // do stuff after call
    console.log(ctx.status.code);
}

server.use(checkAuthorizationToken);

server.bindAsync(port, ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log(err)
        return;
    }
    server.start();
    console.log(`listening on port ${port}`)
});