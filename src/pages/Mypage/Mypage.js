import './mypage.css';
import Header from '../../components/Header/Header.js';
import { useEffect, useState } from 'react';
import Locker from './component/Locker.js';
import History from './component/History.js';
import Footer from '../../components/Footer/Footer.js';

function Mypage() {

    // 버튼 클릭 상태
    const [clickCompenet, setClickCompenet] = useState('locker');

    // 버튼 클릭 동작
    const sectionChange = (component) => {
        setClickCompenet(component);

        const likeButton = document.querySelector('.lockerContent');
        const historyButton = document.querySelector('.historyContent');
        if (component === 'locker') {
            likeButton.style.borderBottom = '2px solid #eee';
            historyButton.style.borderBottom = 'none';
            likeButton.style.color = '#eee';
            likeButton.style.fontWeight = '800';
            historyButton.style.color = '#717171';
            historyButton.style.fontWeight = '500'
        } else if (component === 'history') {
            likeButton.style.borderBottom = 'none';
            historyButton.style.borderBottom = '2px solid #eee';
            historyButton.style.color = '#eee';
            historyButton.style.fontWeight = '800';
            likeButton.style.color = '#717171';
            likeButton.style.fontWeight = '500'
        }
    }

    useEffect(() => {
        // 페이지가 처음으로 마운트될 때 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Header></Header>
            <div id='myPage'>
                <div className='myPage_menu'>
                    <button className='lockerContent' onClick={() => sectionChange('locker')}><p>보관함</p></button>
                    <button className='historyContent' onClick={() => sectionChange('history')}><p>최근본작품</p></button>
                    <hr className='contentBorder'></hr>
                </div>
                {clickCompenet === 'locker' && <Locker></Locker>}
                {clickCompenet === 'history' && <History></History>}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Mypage;