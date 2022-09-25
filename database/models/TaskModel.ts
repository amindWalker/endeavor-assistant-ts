// node_modules imports
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
class TaskModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    service: string;
    @Column("timestamp with time zone")
    date: Date;
}

//If you add public methods, you may want to replace the empty string with them!
type TaskMData = Partial<InstanceType<typeof TaskModel>>;

export default TaskModel;
