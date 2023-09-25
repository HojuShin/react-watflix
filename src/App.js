import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main.js';
import Detail from './pages/Detail/Detail.js'
import Mypgae from './pages/Mypage/Mypage.js';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // 최근 본 작품 localStorage 저장
    // 새로고침 시 localStorage 항목 제거되는 현상 방지 (watched에 항목이 있으면 새배열 생성 금지)
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
      <Route path='/mypage' element={<Mypgae />}></Route>
    </Routes>
  );
}

export default App;
