import {isAuthenticated} from "./utils/auth";
import {Server, ServerCredentials} from '@grpc/grpc-js';
import {ContactServiceService} from "./protos/contacts_grpc_pb";
import {AuthServiceService} from "./protos/auth_grpc_pb";
import {addContact, deleteContact, getContacts, updateContact} from "./services/contactService";
import {login, refreshAccessToken, userMe} from "./services/authService";

const interceptors = require('grpcjs-interceptors');

const host = `node-server:${5000}`;
const server = interceptors.serverProxy(new Server());

server.addService(ContactServiceService, {
    addContact,
    getContacts,
    updateContact,
    deleteContact
});

server.addService(AuthServiceService, {
    login,
    userMe,
    refreshAccessToken
});

const openEndpoints = [
    '/auth.AuthService/Login',
    '/auth.AuthService/RefreshAccessToken'
]
const checkAuthorizationToken = async function (ctx, next, callback) {
    if (!openEndpoints.includes(ctx.service.path)) {
        // check if user is authorized to access this route.
        const metadata = ctx.call.metadata;
        const authToken = metadata.get("authorization").toString();
        const userIsAuthenticated = await isAuthenticated(authToken)
        if (!userIsAuthenticated) {
            callback(new Error("Unauthorized."))
            return;
        }
    }
    await next()
}

server.use(checkAuthorizationToken);

server.bindAsync(host, ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log(err)
        return;
    }
    server.start();
    console.log(`listening on ${host}`)
});