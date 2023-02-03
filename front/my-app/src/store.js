import { configureStore } from '@reduxjs/toolkit'

import totalReducer from './slice/totalSlice'

export default configureStore({
    reducer: {
        total: totalReducer
    }
})

/*
Redux 사용법
1. createSlice 작성
2. store 작성
3. index.js 설정 추가
4. 사용할 component 코드 작성
    import { useSelector } from 'react-redux'
    const str = useSelector((store)=> store.total.key);
*/
