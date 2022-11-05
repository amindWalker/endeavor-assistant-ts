import User from "./database/models/User";

export interface ITask {
    id: string;
    provider: string;
    date: Date;
}

export interface IServiceRequestDTO {
    provider: string;
    date: Date;
}

export interface IAuthRequestDTO {
    username?: string;
    email: string;
    password: string;
}

export interface IUserTokenDTO {
    user: User;
    token: string;
}

export interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export interface IUploadRequestDTO {
    filename: string;
    user_id: string;
}
