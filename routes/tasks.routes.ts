// node_modules imports
import { Router } from "express";
import { parseISO } from "date-fns";
// local imports
import Tasks from "../task_store/Tasks";
import CreateTaskService from "../CreateTaskService";

const taskRouter = Router();
// TODO: add new kinds of tasks
const tasks = new Tasks(); // NOTE: instantiate a new general-purpose task

taskRouter.get("/", (_, res) => {
    return res.json(tasks.all());
})

// NOTE: root path "/" is relative to "/" in routes
taskRouter.post("/", (req, res) => {
    try {
        const { service, date } = req.body;

        // pipeline individual tasks input-> parse-> create-> process-> output->
        const parsedDate = parseISO(date);
        const createTask = new CreateTaskService(tasks);
        const newTask = createTask.run({ service, date: parsedDate });

        return res.status(200).json(newTask);
    } catch (err: unknown) {
        return res.status(400).json({ error: err.message })
    }

});

export default taskRouter;
