// node_modules imports
import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
require("dotenv").config();
import cors from "cors";
// local imports
import routes from "./routes";
import "./database/dataSource";
import FileUploader from "./utils/FileUploader";
import errorCatcher from "./middlewares/errorCatcher";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static(FileUploader.directory));
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof errorCatcher) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }
    // console.error(err);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

app.get("/", (_, res) => {
    return res.status(200).send(`
    <div align="center">
    <h1>Do It Manager</h1>
    <p>{tasks}</p>
    </div>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.info(`\n[:: OK ::] Server started on port: ${PORT}\n`);
});
