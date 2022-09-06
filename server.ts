import express from "express";
import routes from "./routes";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.status(200).send(`
        <div align="center">
            <h1>Business+ Manager</h1>
            <p>{schedules}</p>
        </div>
        `);
});

app.listen(PORT, () => {
    console.info(`🟩 Server started on port: ${PORT} 📡`);
});
