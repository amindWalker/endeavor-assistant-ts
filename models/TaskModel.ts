import {v4 as uuidv4} from "uuid";

export class TaskModel {
    id: string;
    service: string;
    date: Date;
    constructor(service: string, date: Date) {
        this.id = uuidv4();
        this.service = service;
        this.date = date;
    }
}

//If you add public methods, you may want to replace the empty string with them!
type TaskMData = Partial<InstanceType<typeof TaskModel>>
