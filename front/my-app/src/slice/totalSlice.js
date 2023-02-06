import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'test',
    initialState: {
      selectedParking: '12',
        //count: 0
    },
    reducers: {
      changeSelectedParking: (state, action) => {
        console.log(action)
        console.log(12345)
        state.selectedParking = action.payload
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
export const { changeSelectedParking } = totalSlice.actions

export default totalSlice.reducer