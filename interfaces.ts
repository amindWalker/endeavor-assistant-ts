// TODO: export every interface from here
export interface ITask {
    id: string;
    service: string;
    date: Date;
}

export interface IServiceRequestDTO {
    service_id: string;
    date: Date;
}

export interface IAuthRequestDTO {
    username: string;
    email: string;
    password: string;
}
