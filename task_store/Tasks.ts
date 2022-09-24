import { TaskModel } from "../database/models/TaskModel";
import { isEqual } from "date-fns"

interface ICreateDTO {
    service: string,
    date: Date
}

class Tasks {
    private tasks: Array<TaskModel>;
    constructor() {
        this.tasks = [];
    }

    public all() {
        return this.tasks;
    }

    public findByDate(date: Date): TaskModel | false {
        const getTask = this.tasks.find((task) =>
            isEqual(date, task.date)
        );
        return getTask || false;
    }

    public create({ service, date }: ICreateDTO) {
        const newTask = new TaskModel(service, date);
        this.tasks.push(newTask);

        return newTask;
    }
}

export default Tasks;
