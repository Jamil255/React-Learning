import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state, action) => {
      console.log(state, action)
    },
    deleteCounter: (state, action) => {
      console.log(state, action)
    },
  },
})

export const { addCounter, deleteCounter } = counterSlice.actions
export default counterSlice.reducer
