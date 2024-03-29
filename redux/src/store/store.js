import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userSlice,
    }

})
export default store