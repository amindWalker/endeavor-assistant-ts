import {
    randomBytes,
    pbkdf2Sync,
    createPrivateKey,
    createPublicKey,
} from "crypto";
import { V4 as pasetoV4 } from "paseto";
require("dotenv").config();

export class HashingTools {
    public async generateHash(password: string): Promise<string> {
        const salt = randomBytes(64).toString("base64");
        const hashedPassword = pbkdf2Sync(
            password,
            salt,
            10000,
            64,
            "sha512"
        ).toString("base64");
        return [hashedPassword, salt].join("#");
    }

    public async validateHash(
        password: string,
        storedHash: string
    ): Promise<boolean> {
        const [storedPassword, storedSalt] = storedHash.split("#");
        const inputPasswordHash = pbkdf2Sync(
            password,
            storedSalt,
            10000,
            64,
            "sha512"
        ).toString("base64");
        return inputPasswordHash === storedPassword;
    }

    public async signToken(payload: object, subject: string): Promise<string> {
        const privateKey = await createPrivateKey(process.env.APP_SECRET_KEY);
        const token = await pasetoV4.sign(payload, privateKey, {
            subject,
            expiresIn: "2 hours",
        });
        return token;
    }

    public async verifyToken(token: string): Promise<object> {
        const publicKey = await createPublicKey(process.env.APP_PUBLIC_KEY);
        const tokenVerified = await pasetoV4.verify(token, publicKey);
        return tokenVerified;
    }
}
