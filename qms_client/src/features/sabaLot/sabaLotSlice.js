import { createSlice } from '@reduxjs/toolkit'

export const sabaLotSlice = createSlice({
  name: 'sabaCalculus',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement } = sabaLotSlice.actions
export const selectCount = state => state.sabaLot.value

export default sabaLotSlice.reducer
