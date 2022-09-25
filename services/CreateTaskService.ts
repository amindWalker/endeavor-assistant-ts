// node_modules imports
import TaskModel from "../database/models/TaskModel";

// local imports
import { startOfHour } from "date-fns";
import { IRequestDTO } from "../interfaces";
import { customTaskRepository } from "../database/dataSource";

class CreateTaskService {
    public async run({service,date,}: IRequestDTO): Promise<TaskModel | null> {
        const parsedDate = startOfHour(date);
        const getTaskDate = await customTaskRepository.findByDate(parsedDate);
        const isCollisionDate = getTaskDate?.date.toString() === parsedDate.toString();

        if (isCollisionDate) {
            throw Error("Já reservado") // Already booked
        }
        const newTask = customTaskRepository.create({
            service,
            date: parsedDate,
        });
        await customTaskRepository.save(newTask);

        return newTask;
    }
}

export default CreateTaskService;
