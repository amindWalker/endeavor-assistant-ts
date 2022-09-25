// node_modules imports
import { Router } from "express";
import { parseISO } from "date-fns";
// local imports
import CreateTaskService from "../services/CreateTaskService";
import { customTaskRepository } from "../database/dataSource";

const taskRouter = Router();
// TODO: add new routes for tasks

taskRouter.get("/", async (_, res) => {
    const weekTasks = await customTaskRepository.find();
    return res.json(weekTasks);
});

// NOTE: root path "/" is relative to "/" in routes
taskRouter.post("/", async (req, res) => {
    try {
        const { service, date } = req.body;

        // pipeline individual tasks input-> parse-> create-> process-> output->
        const parsedDate = parseISO(date);
        const createTask = new CreateTaskService();
        const newTask = await createTask.run({ service, date: parsedDate });

        return res.status(200).json(newTask);
    } catch (err: unknown) {
        return res.status(400).json({ error: err.message });
    }
});

export default taskRouter;
