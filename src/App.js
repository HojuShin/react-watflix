import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main.js';
import Detail from './pages/Detail/Detail.js'
import Mypgae from './pages/Mypage/Mypage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/mypage' element={<Mypgae />}></Route>
      </Routes>
    </div>
  );
}

export default App;
