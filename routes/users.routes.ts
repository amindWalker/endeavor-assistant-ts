// node_modules imports
import { Router } from "express";
import CreateUserService from "../services/CreateUserService";

const userRouter = Router();
// NOTE: root path "/" is relative to "/" in routes
userRouter.post("/", async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const createUser = new CreateUserService();

        const newUser = await createUser.run({
            username,
            email,
            password
        });

        return res.status(200).json(newUser)
    } catch (err: unknown) {
        return res.status(400).json({ error: err.message });
    }
});

export default userRouter;
