import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {generateAccessToken, generateRefreshToken, getLoggedInUser, refreshToken} from "../utils/auth";
import {User} from "../types/user";
import {
    LoginRequest,
    LoginResponse,
    RefreshAccessTokenRequest,
    RefreshAccessTokenResponse,
    UserRequest,
    UserResponse
} from "../protos/auth_pb";

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

    if (USERS.get(request.getUsername()) && USERS.get(request.getUsername()).password === request.getPassword()) {
        const user = USERS.get(request.getUsername());
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        response.setJwttoken(accessToken);
        response.setRefreshtoken(refreshToken);
        response.setStatus(200);
        callback(null, response)
    } else {
        const error = "Unauthorized. Check credentials and try again."
        response.setError(error);
        response.setStatus(401);
        callback(new Error(error), response)
    }
}

export const refreshAccessToken = async (call: ServerUnaryCall<RefreshAccessTokenRequest, RefreshAccessTokenResponse>, callback: sendUnaryData<RefreshAccessTokenResponse>) => {
    const token = await refreshToken(call.request.getRefreshtoken());
    const response = new RefreshAccessTokenResponse();
    let error: Error = new Error("Unauthorized.");
    let status = 401;
    if (token) {
        status = 200;
        error = null;
        response.setAccesstoken(token)
    }
    response.setError(error?.message);
    response.setStatus(status);
    callback(error, response)
}