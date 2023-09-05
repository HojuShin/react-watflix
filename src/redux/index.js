import storage from 'redux-persist/lib/storage'; // local storage 저장
import locker from './store';
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['locker'] //storage에 저장할 리덕스 모듈
}

// 리듀서 통합
const rootReducer = combineReducers({ locker })

// 리듀서 redux-persist 화 
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store 설정 (persistedReducer로 상태 관리)
const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;