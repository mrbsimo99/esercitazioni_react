import { createSlice } from '@reduxjs/toolkit';
import { memory } from '../../utils/memory';

const auth = memory.get("auth");

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: auth?.user || null,
        token: auth?.token || null,
    },
    reducers: {
        login: (state, { payload }) => { // { user: {}, token: "123123" }
            state.user = payload.user;
            state.token = payload.token;

            if (payload.rememberMe) {
                memory.set("auth", { ...payload }); // { user: {}, token: "123123" }
            } else {
                memory.remove("auth");
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.rememberMe = false;

            memory.remove("auth");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;