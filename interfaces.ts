// TODO: export every interface from here
// NOTE: STORED TASKS
export interface ITask {
    id: string;
    service: string;
    date: Date;
}

export interface IRequestDTO {
    service: string;
    date: Date;
}
