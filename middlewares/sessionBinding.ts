import { Request, Response, NextFunction } from "express";
import { ITokenPayload } from "../interfaces";
import { HashingTools } from "../utils/HashingTools";
require("dotenv").config();

async function sessionBinding(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw Error("Missing session token or auth headers");
    }

    const [, token] = authHeader.split(" ");
    try {
        const hash = new HashingTools();
        const decodedToken = (await hash.verifyToken(
            `v4.public.${token}`
        )) as ITokenPayload;
        // set the id of the logged user
        const { sub } = decodedToken;
        req.user = {
            id: sub,
        };

        return next();
    } catch (err) {
        throw Error("Invalid Signature");
    }
}

export default sessionBinding;
