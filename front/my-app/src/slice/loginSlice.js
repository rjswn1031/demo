import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
      loginToken: '123',
    },
    reducers: {
      setLoginToken: (state, action) => {
        state.loginToken = action.payload
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
export const { setLoginToken } = loginSlice.actions

export default loginSlice.reducer