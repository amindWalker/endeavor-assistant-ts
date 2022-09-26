import { Router } from "express";
import taskRouter from "./tasks.routes";
import userRouter from "./users.routes";

const routes = Router();

routes.use("/tasks", taskRouter);
routes.use("/users", userRouter);

export default routes;
