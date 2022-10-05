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
