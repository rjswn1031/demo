import { createSlice } from '@reduxjs/toolkit'

export const totalSlice = createSlice({
    name: 'total',
    initialState: {
        isMaskOn: false,  //mask 표출 여부
        modalType: '',
        modalDetailBoardNo: null
    },
    reducers: {
      toggleMask: (state, action) => {
        state.isMaskOn = action.payload
      },
      changeModalType: (state, action) => {
        state.modalType = action.payload
      },
      setBoardDetailNo: (state, action) => {
        state.modalDetailBoardNo = action.payload
      }
    }
})

//export const { increment, decrement, incrementByAmount } = totalSlice.actions
export const { toggleMask, changeModalType, setBoardDetailNo } = totalSlice.actions

export default totalSlice.reducer
