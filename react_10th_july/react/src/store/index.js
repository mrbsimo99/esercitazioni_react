import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import reducer from "./slices/authSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
