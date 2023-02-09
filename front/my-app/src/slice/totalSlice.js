import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'total',
    initialState: {
      parkCode: '',
    },
    reducers: {
      changeParkCode: (state, action) => {
        state.parkCode = action.payload
      }
        /* increment: state => {
            state.count += 1
          },
          decrement: state => {
            state.count -= 1
          },
          incrementByAmount: (state, action) => {
            state.count += action.payload
          } */
    }
})

//export const { increment, decrement, incrementByAmount } = totalSlice.actions
export const { changeParkCode } = totalSlice.actions

export default totalSlice.reducer