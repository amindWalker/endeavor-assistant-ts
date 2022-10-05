// node_modules imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// local imports
import { IAuthState } from "../../../common/interfaces"

// RTK Ducks pattern
const initialState: IAuthState = { value: false  };

// Defining the slice state
const authStateSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // NOTE: reducers and actions are immutably handled by immer internally in RTK
        loggedIn(state) {
            state.value = true;
        },
        loggedOut(state) {
            state.value = false;
        },
    },
});

export const { loggedIn, loggedOut } = authStateSlice.actions;

export default authStateSlice.reducer;
