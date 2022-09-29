import { Request, Response, NextFunction } from "express";
import { ITokenPayload } from "../interfaces";
import errorCatcher from "../middlewares/errorCatcher";
import { HashingTools } from "../utils/HashingTools";
require("dotenv").config();

async function sessionBinding(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new errorCatcher("Missing session token or auth headers");
    }

    const [, token] = authHeader.split(" ");
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
}

export default sessionBinding;
