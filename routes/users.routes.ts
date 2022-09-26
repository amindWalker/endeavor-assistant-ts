// node_modules imports
import { Router } from "express";
import User from "../database/models/User";
import CreateUserService from "../services/CreateUserService";

const userRouter = Router();
// NOTE: root path "/" is relative to "/" in routes
userRouter.post("/", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const createUser = new CreateUserService();

        const newCreatedUser = await createUser.run({
            username,
            email,
            password,
        });
        // making sure the password doesn't show up in response
        delete newCreatedUser.password;

        return res.status(200).json(newCreatedUser);
    } catch (err: unknown) {
        return res.status(400).json({ error: err.message });
    }
});

export default userRouter;
