import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "jamil afzal"
    },
    reducers: {
        updateName: (state, action) => {
            state.userName = "adeel afzal mughal "
        },
        deleteName: (state, action) => {
            console.log("state.deleteName");
        }
    }
})
export const { updateName } = userSlice.actions
export default userSlice.reducer