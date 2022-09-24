import { DataSource } from "typeorm";
require("dotenv").config();

const database = new DataSource({
    type: "postgres",
    host: "0.0.0.0",
    port: 5432,
    database: process.env.PG_DB_NAME,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    synchronize: false,
    logging: true,
    entities: ["database/models/**/*.ts"],
    migrations: ["database/migrations/**/*.ts"],
    subscribers: ["database/subscriber/**/*.ts"],
});

database.initialize();

export default database;
