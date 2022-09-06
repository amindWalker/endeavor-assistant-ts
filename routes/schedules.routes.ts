import { Router } from "express";
import {toDate} from "date-fns-tz";
import {startOfHour, isEqual } from "date-fns";
import Schedule from "../entities/Schedule";
import ScheduleTasks from "../roles/ScheduleTasks";

const taskRouter = Router();

const schedules: Array<Schedule> = [];
// NOTE: root path "/" is relative to "/" in routes
taskRouter.post("/", (req, res) => {
    const { service, date } = req.body;
    const scheduleTask = new ScheduleTasks(); // instantiate

    const parsedDate = startOfHour(
        toDate(date, { timeZone: "America/Brazil" })
    );
    const isCollisionDate: boolean = schedules.find((schedule) =>
        isEqual(parsedDate, schedule.date)
    )
        ? true
        : false;

    if (isCollisionDate === true) {
        return res.status(400).json({ message: "Já reservado" }); // Already booked
    }

    const schedule = scheduleTask.create(service, date);

    return res.status(200).json(schedule);
});

export default taskRouter;
