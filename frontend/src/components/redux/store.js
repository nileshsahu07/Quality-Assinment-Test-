import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice";
import SignupReducer from "./slices/SignupSlice";

const store = configureStore({
    reducer:{
        login:LoginReducer,
        signUp:SignupReducer
    }
})

export default store;
