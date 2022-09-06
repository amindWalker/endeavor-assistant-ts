import Schedule from "../entities/Schedule";
import {isEqual} from "date-fns"

class ScheduleTasks {
    private schedules: Array<Schedule>;

    constructor() {
        this.schedules = [];
    }

    public findByDate(service: string, date: Date): Schedule | string {
        const getSchedule = this.schedules.find((schedule) =>
            isEqual(date, schedule.date)
        );
        return getSchedule || "nenhum resultado";
    }

    public create(service: string, date: Date): Schedule {
        const newSchedule = new Schedule(service, date);
        this.schedules.push(newSchedule);

        return newSchedule;
    }
}

export default ScheduleTasks;
