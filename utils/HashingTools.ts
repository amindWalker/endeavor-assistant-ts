import { randomBytes, pbkdf2Sync } from "crypto";
import { V4 as pasetoV4 } from "paseto";

export class HashingTools {
    public async createHash(password: string): Promise<string> {
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

    public async generateToken(payload: object, subject: string): Promise<string> {
        const keyStore = await pasetoV4.generateKey("public");
        const privateKey = pasetoV4.keyObjectToBytes(keyStore);
        const token = await pasetoV4.sign(payload, privateKey, {
            subject,
            expiresIn: "2 hours",
        });
        console.log(`\n${token}\n`);
        return token;
    }
}
