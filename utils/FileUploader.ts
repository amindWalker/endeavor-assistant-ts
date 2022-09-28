import path from "path";
import { randomBytes } from "crypto";
import multer from "multer";

const FileUploader = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "catalog"),
        filename(req, file, callback) {
            const fileHash = randomBytes(16).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        },
    }),
};

export default FileUploader;
