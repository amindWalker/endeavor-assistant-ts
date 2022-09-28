import path from "path";
import { randomBytes } from "crypto";
import multer from "multer";

const catalog = path.resolve(__dirname, "..", "catalog")

const FileUploader = {
    directory: catalog,
    storage: multer.diskStorage({
        destination: catalog,
        filename(req, file, callback) {
            const fileHash = randomBytes(8).toString("hex");
            const fileName = `${fileHash}_${file.originalname}`;
            return callback(null, fileName);
        },
    }),
};

export default FileUploader;
