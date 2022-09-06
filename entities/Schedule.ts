import {v4 as uuidv4} from "uuid";

class Schedule {
    id: string;
    service: string;
    date: Date;
    constructor(service: string, date: Date) {
        this.id = uuidv4();
        this.service = service;
        this.date = date;
    }
}

export default Schedule;
