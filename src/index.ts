import express from 'express';
import grpc from '@grpc/grpc-js';
import {generateAccessToken, generateRefreshToken, isAuthenticated, refreshToken} from './utils/auth';
import cookieParser from 'cookie-parser';
import {ContactServiceService} from "./protos/contacts_grpc_pb";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Mock user data for authentication
const USERS = {
    'admin': {password: 'admin'},
    'staff': {password: 'staff'},
};

app.post('/auth/login', (req, res) => {
    const {username, password} = req.body;

    if (USERS[username] && USERS[username].password === password) {
        const accessToken = generateAccessToken({username});
        const refreshToken = generateRefreshToken({username});

        res.cookie('refreshToken', refreshToken, {httpOnly: true});
        res.json({accessToken});
    } else {
        res.sendStatus(403);
    }
});

app.post('/auth/refresh', refreshToken);

app.get('/contacts', isAuthenticated, (req, res) => {
    // Handle gRPC calls for getting contacts
});

app.post('/contacts', isAuthenticated, (req, res) => {
    // Handle gRPC calls for adding contacts
});

app.put('/contacts', isAuthenticated, (req, res) => {
    // Handle gRPC calls for updating contacts
});

app.delete('/contacts/:id', isAuthenticated, (req, res) => {
    // Handle gRPC calls for deleting contacts
});

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const server = new grpc.Server;
server.addService(ContactServiceService, {});
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});