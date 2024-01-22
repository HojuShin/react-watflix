import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy, useEffect } from 'react';
import Loading from './Loading.js';

function App() {

  //레이지 로딩 적용 페이지
  const Main = lazy(() => import('./pages/Main/Main.js'));
  const Detail = lazy(() => import('./pages/Detail/Detail.js'));
  const Mypage = lazy(() => import('./pages/Mypage/Mypage.js'));

  useEffect(() => {
    // 최근 본 작품 localStorage 저장
    // 새로고침 시 localStorage 항목 제거되는 현상 방지 (watched에 항목이 있으면 새배열 생성 금지)
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
