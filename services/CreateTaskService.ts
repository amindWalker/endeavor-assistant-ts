// node_modules imports
import TaskModel from "../database/models/TaskModel";

// local imports
import { startOfHour } from "date-fns";
import { IServiceRequestDTO } from "../interfaces";
import { customTaskRepository } from "../database/dataSource";
import errorCatcher from "../middlewares/errorCatcher";

class CreateTaskService {
    public async run({ provider, date }: IServiceRequestDTO): Promise<TaskModel | null> {
        const parsedDate = startOfHour(date);
        const getTaskDate = await customTaskRepository.findByDate(parsedDate);
        const isCollisionDate = getTaskDate?.date.toString() === parsedDate.toString();

        if (isCollisionDate) {
            throw new errorCatcher("Já reservado") // Already booked
        }
        const newCreatedTask = customTaskRepository.create({
            provider,
            date: parsedDate,
        });
        await customTaskRepository.save(newCreatedTask);

        return newCreatedTask;
    }
}

export default CreateTaskService;
