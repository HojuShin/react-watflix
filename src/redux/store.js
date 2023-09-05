import { configureStore, createSlice } from '@reduxjs/toolkit';

//reducer 정의
const store = createSlice({
  name: 'store',
  initialState: [], //초기 상태
  reducers: {
  }
})

//store 구성
export default configureStore({
  reducer: {
  }
})