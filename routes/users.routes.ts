// node_modules imports
import { Router } from "express";
import multer from "multer";
import sessionBinding from "../middlewares/sessionBinding";
import CreateUserService from "../services/CreateUserService";
import UploadService from "../services/UploadService";
import FileUploader from "../utils/FileUploader";

const userRouter = Router();
const uploader = multer(FileUploader);

// NOTE: root path "/" is relative to "/" in routes
userRouter.post("/", async (req, res) => {
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
});

userRouter.patch(
    "/profile",
    sessionBinding,
    uploader.single("profile_image"),
    async (req, res) => {
        const editUser = new UploadService();
        const updatedUser = await editUser.run({
            filename: req.file?.filename,
            user_id: req.user.id,
        });
        delete updatedUser.password;

        return res.status(200).json(updatedUser);
    }
);

export default userRouter;
