import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 1,
    },
    reducers: {
        add: (state, action) => {
            let count = state.count
            state.count = ++count
        },
        minus: (state, action) => {
            let count = state.count
            state.count = --count
        },
    }
})
export const { add, minus
} = counterSlice.actions;
export default counterSlice.reducer;