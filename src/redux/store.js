import { configureStore, createSlice } from '@reduxjs/toolkit';

//reducer 정의
const locker = createSlice({
  name: 'locker',
  initialState: [], //초기 상태
  reducers: {
    // locker에 추가 동작
    addLocker(state, action) {
      state.push(action.payload);
    },
    // locker 에서 제거 동작
    deleteLocker(state, action) {
      // locker 에서 해당 title을 가진 객체 삭제 
      const lockerTitle = state.find(e => e.title === action.payload.title);
      for (var i = 0; i < state.length; i++) {
        if (state[i].title == lockerTitle.title) {
          state.splice(i, 1);
          // 배열 길이 변화
          i--;
        }
      }
    },
  }
})

// action 내보내기
export const { addLocker, deleteLocker } = locker.actions;

//store 구성
export default configureStore({
  reducer: {
    locker: locker.reducer
  }
})
