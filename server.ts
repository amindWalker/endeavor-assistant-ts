import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

import "./database";

app.get("/", (req, res) => {
    return res.status(200).send(`
    <div align="center">
    <h1>Business+ Manager</h1>
    <p>{tasks}</p>
    </div>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.info(`\n[:: OK ::] Server started on port: ${PORT}\n`);
});
