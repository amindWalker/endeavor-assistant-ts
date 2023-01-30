// node_modules imports
import "reflect-metadata";
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
        console.info("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("\nError during Data Source initialization\n", err);
        console.error("\nCheck your ENV variables and your connection to the database\n");
        console.error("If you're using containers, check if they're running and test your connection to the database\n");
    });

// NOTE: injecting custom repository into TypeORM
export const customTaskRepository = new TaskRepository(
    TaskModel,
    dataSource.createEntityManager()
);


export default dataSource;
