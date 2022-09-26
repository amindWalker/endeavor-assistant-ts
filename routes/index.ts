// node_modules imports
import { Router } from "express";
// local imports
import sessionRouter from "./sessions.routes";
import userRouter from "./users.routes";
import taskRouter from "./tasks.routes";

const routes = Router();

routes.use("/sessions", sessionRouter);
routes.use("/users", userRouter);
routes.use("/tasks", taskRouter);

export default routes;
