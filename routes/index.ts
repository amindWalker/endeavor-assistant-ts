import { Router } from "express";
import scheduleRouter from "./schedules.routes";

const routes = Router();

routes.use("/schedules", scheduleRouter);

export default routes;
