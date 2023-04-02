import jwt from 'jsonwebtoken';
import {User} from "../types/user";

const SECRET_KEY = 'your-secret-key'; // You can configure this to use any string combinations you prefer.
const REFRESH_SECRET_KEY = 'your-refresh-secret-key'; // You can configure this to use any string combinations you prefer.
let user: User | undefined;

export function generateAccessToken(user: object): string {
    delete (user as any).exp
    return jwt.sign(user, SECRET_KEY, {expiresIn: '5m'});
}

export function generateRefreshToken(user: object): string {
    delete (user as any).exp
    return jwt.sign(user, REFRESH_SECRET_KEY, {expiresIn: '7d'});
}

export function getLoggedInUser() {
    return user;
}

export async function isAuthenticated(authHeader: string): Promise<boolean> {
    return new Promise(resolve => {
        if (!authHeader) {
            resolve(false)
            return;
        }

        jwt.verify(authHeader, SECRET_KEY, (err, u) => {
            if (err) {
                resolve(false)
                return;
            }
            user = u;
            resolve(true)
        });
    })


}

export function refreshToken(refreshToken: string): Promise<string> {
    return new Promise(resolve => {
        if (!refreshToken) {
            resolve("");
            return;
        }

        jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
            if (err) {
                console.log(err)
                resolve("");
                return;
            }

            const accessToken = generateAccessToken(user);
            resolve(accessToken);
        });
    })

}

