import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'test',
    initialState: {
        key: '나의 키',
        //count: 0
    },
    reducers: {
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

export default totalSlice.reducer