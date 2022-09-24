import TaskModel from "../database/models/TaskModel";
import Tasks from "../task_store/Tasks";
import { startOfHour } from "date-fns"

interface IRequestDTO {
    service: string;
    date: Date;
}

class CreateTaskService {
    private tasks: Tasks;
    constructor(kind: Tasks) {
        this.tasks = kind;
    }
    public run({ service, date }: IRequestDTO): TaskModel {
        const taskDate = startOfHour(date)
        const isCollisionDate = this.tasks.findByDate(taskDate);

        if (isCollisionDate) {
            throw Error("Já reservado"); // Already booked
        }

        const newTask = this.tasks.create({ service, date: taskDate });

        return newTask;
    }
}

export default CreateTaskService;
