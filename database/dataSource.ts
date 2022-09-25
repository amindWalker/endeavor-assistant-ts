// node_modules imports
import { DataSource } from "typeorm";
require("dotenv").config();
// local imports
import TaskRepository from "./custom_repository/TaskRepository";
import TaskModel from "./models/TaskModel";

const dataSource = new DataSource({
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

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

// NOTE: injecting custom repository into TypeORM
export const customTaskRepository = new TaskRepository(
    TaskModel,
    dataSource.createEntityManager()
);

export default dataSource;
