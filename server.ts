// node_modules imports
import express from "express";
import { generateKeyPairSync, createPrivateKey } from "crypto";
// local imports
import routes from "./routes";
require("dotenv").config()

const app = express();
app.use(express.json());
app.use(routes);

import "./database/dataSource";

app.get("/", (_, res) => {
    return res.status(200).send(`
    <div align="center">
    <h1>Do It Manager</h1>
    <p>{tasks}</p>
    </div>
    `);
});

const PORT = 3001;
const {privateKey,publicKey} = generateKeyPairSync("ed25519");
app.listen(PORT, () => {
    console.info(`\n[:: OK ::] Server started on port: ${PORT}\n`);
});
