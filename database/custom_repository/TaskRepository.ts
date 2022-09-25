// node_modules imports
import { Repository } from "typeorm";
// local imports
import TaskModel from "../models/TaskModel";

class TaskRepository extends Repository<TaskModel> {
    public async findByDate(date: Date): Promise<TaskModel | null> {
        const getTask = await this.findOne({
            where: { date },
        });

        return getTask || null;
    }
}

export default TaskRepository;
