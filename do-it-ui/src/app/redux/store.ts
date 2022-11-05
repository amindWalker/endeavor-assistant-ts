// node_modules imports
import { configureStore } from "@reduxjs/toolkit";
// local imports
import authStateSlice from "../features/Auth/authStateSlice";
import loginSignUpStateSlice from "../features/Auth/loginSignUpStateSlice";
import { apiStateSlice } from "../../app/connectAPI";

export const store = configureStore({
    reducer: {
        auth: authStateSlice,
        signup: loginSignUpStateSlice,
        [apiStateSlice.reducerPath]: apiStateSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(apiStateSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
