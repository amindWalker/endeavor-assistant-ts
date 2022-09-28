declare namespace Express {
    // append item overriding the existing Request interface
    export interface Request {
        user: {
            id: string;
        };
    }
}
