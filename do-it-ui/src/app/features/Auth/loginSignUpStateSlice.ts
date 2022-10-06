// node_modules imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// local imports
import { ILoginSignUp } from "../../../common/interfaces"

// RTK Ducks pattern
const initialState: ILoginSignUp = { value: false  };

// Defining the slice state
const singUpStateSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        // NOTE: reducers and actions are immutably handled by immer internally in RTK
        switchToSignUp(state) {
            state.value = true;
        },
        switchToLogin(state) {
            state.value = false;
        }
    },
});

export const { switchToSignUp, switchToLogin } = singUpStateSlice.actions;

export default singUpStateSlice.reducer;

