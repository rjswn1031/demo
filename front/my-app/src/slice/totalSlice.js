import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'total',
    initialState: {
      parkList: [],
      boardCodeList: [],
      parkCode: '',      //선택된 마커의 주차장 코드
    },
    reducers: {
      setBoardCodeList: (state, action) => { state.boardCodeList = action.payload },
      setParkList: (state, action) => { state.parkList = action.payload },
      changeParkCode: (state, action) => { state.parkCode = action.payload }
    }
})

//export const { increment, decrement, incrementByAmount } = totalSlice.actions
export const { setBoardCodeList, setParkList, changeParkCode } = totalSlice.actions

export default totalSlice.reducer