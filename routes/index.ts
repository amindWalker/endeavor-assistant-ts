import { Router } from "express";
import taskRouter from "./tasks.routes";

const routes = Router();

routes.use("/tasks", taskRouter);

export default routes;
