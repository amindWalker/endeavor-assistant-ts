export interface ISignUpForm {
    email: string;
    password: string;
    username: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IAuthState {
    value: boolean;
}

export interface ILoginSignUp {
    value: boolean;
}

export interface User {
    id: string;
    username: string;
    email: string;
    profile_image: string;
}

export interface ITask {
    id: string;
    provider: User;
    provider_id: string;
    date: Date;
    created_at: Date;
    updated_at: Date;
}
