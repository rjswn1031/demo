import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'total',
    initialState: {
      parkCode: '',      //선택된 마커의 주차장 코드
    },
    reducers: {
      changeParkCode: (state, action) => {
        state.parkCode = action.payload
      }
    }
})

//export const { increment, decrement, incrementByAmount } = totalSlice.actions
export const { changeParkCode } = totalSlice.actions

export default totalSlice.reducer