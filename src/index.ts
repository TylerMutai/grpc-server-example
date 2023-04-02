import {isAuthenticated} from "./utils/auth";
import {Metadata, Server, ServerCredentials} from '@grpc/grpc-js';
import {ContactServiceService} from "./protos/contacts_grpc_pb";
import {AuthServiceService} from "./protos/auth_grpc_pb";
import {addContact, deleteContact, getContacts, updateContact} from "./services/contactService";
import {login} from "./services/authService";

const interceptors = require('@coozzy/node-grpc-interceptors');

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
    let statusCode = 0;
    // let errorMsg = "";
    if (ctx.service.path !== '/auth.AuthService/Login') {
        // check if user is authorized to access this route.
        const metadata = new Metadata();
        const authToken = metadata.get("authorization").toString();
        if (!await isAuthenticated(authToken)) {
            statusCode = 16;
            // errorMsg = "Unauthenticated."
        }

    }
    ctx.status.code = statusCode
    await next()
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