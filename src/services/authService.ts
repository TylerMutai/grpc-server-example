import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {auth} from "../protos/auth";
import {generateAccessToken, generateRefreshToken, getLoggedInUser} from "../utils/auth";
import {User} from "../types/user";
import {UserRequest, UserResponse} from "../protos/auth_pb";
import LoginRequest = auth.LoginRequest;
import LoginResponse = auth.LoginResponse;

// Mock user data for authentication
const USERS = new Map<string, User>();
USERS.set(
    "admin", {
        id: 1, username: "admin", password: "admin",
    }
)
USERS.set(
    "staff", {
        id: 2, username: "staff", password: "staff",
    }
)

export const userMe = (call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) => {
    const response = new UserResponse();
    const user = getLoggedInUser();
    response.setId(`${user.id}`);
    response.setStatus(200);
    response.setError("");
    response.setUsername(user.username);
    response.setPassword(user.password);
    callback(null, response)
}
export const login = (call: ServerUnaryCall<LoginRequest, LoginResponse>, callback: sendUnaryData<LoginResponse>) => {
    const request = call.request
    const response = new LoginResponse();

    if (USERS.get(request.email) && USERS.get(request.email).password === request.password) {
        const email = request.email;
        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});
        response.jwtToken = accessToken;
        response.refreshToken = refreshToken;
        response.status = 200;
        callback(null, response)
    } else {
        const error = "Unauthorized. Check credentials and try again."
        response.error = error;
        response.status = 401;
        callback(new Error(error), response)
    }
}