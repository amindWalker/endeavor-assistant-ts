// node_modules imports
import { Router } from "express";
import { parseISO } from "date-fns";
// local imports
import CreateTaskService from "../services/CreateTaskService";
import { customTaskRepository } from "../database/dataSource";
import sessionBinding from "../middlewares/sessionBinding";

const taskRouter = Router();
// TODO: add new routes for tasks

taskRouter.use(sessionBinding);

taskRouter.get("/", async (_, res) => {
    const weekTasks = await customTaskRepository.find();
    return res.status(200).json(weekTasks);
});

// NOTE: root path "/" is relative to "/" in routes
taskRouter.post("/", async (req, res) => {
    const { service_id, date } = req.body;

    // pipeline individual tasks input-> parse-> create-> process-> output->
    const parsedDate = parseISO(date);
    const createTask = new CreateTaskService();
    const newTask = await createTask.run({ service_id, date: parsedDate });

    return res.status(200).json(newTask);
});

export default taskRouter;
