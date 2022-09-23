import express from "express";
import routes from "./routes";

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.status(200).send(`
        <div align="center">
            <h1>Business+ Manager</h1>
            <p>{tasks}</p>
        </div>
        `);
});

app.listen(PORT, () => {
    console.info(`\n[:: OK ::] Server started on port: ${PORT}\n`);
});
