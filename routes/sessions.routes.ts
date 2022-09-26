// node_modules imports
import { Router } from "express";
import AuthUserService from "../services/AuthUserService";

const sessionRouter = Router();

// NOTE: root path "/" is relative to "/" in routes
sessionRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const authorizeUser = new AuthUserService();
        const validUser = await authorizeUser.run({
            email,
            password,
        });
        delete validUser.user.password;

        return res.status(200).json(validUser);
    } catch (err: unknown) {
        return res.status(400).json({ error: err.message });
    }
});

export default sessionRouter;
