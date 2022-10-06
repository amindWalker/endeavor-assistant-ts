// node_modules imports
import { configureStore } from "@reduxjs/toolkit";
// local imports
import authStateSlice from "../features/Auth/authStateSlice";
import loginSignUpStateSlice from "../features/Auth/loginSignUpStateSlice";

export const store = configureStore({
    reducer: { auth: authStateSlice, signup: loginSignUpStateSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
