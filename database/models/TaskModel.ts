// node_modules imports
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
// local imports
import User from "./User";

@Entity("tasks")
class TaskModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "service_id" })
    service: User;

    @Column()
    service_id: string;

    @Column("timestamp with time zone")
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

//If you add public methods, you may want to replace the empty string with them!
type TaskMData = Partial<InstanceType<typeof TaskModel>>;

export default TaskModel;
