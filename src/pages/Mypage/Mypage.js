import './mypage.css';
import Header from '../../components/Header/Header.js';
import { useState } from 'react';

function Mypage() {

    // 버튼 클릭 상태
    const [clickCompenet, setClickCompenet] = useState('locker');

    // 버튼 클릭 동작
    const sectionChange = (component) => {
        setClickCompenet(component);

        const likeButton = document.querySelector('.lockerContent');
        const historyButton = document.querySelector('.historyContent');
        if (component === 'locker') {
            likeButton.style.borderBottom = '2px solid rgb(222, 42, 96)';
            historyButton.style.borderBottom = 'none';
            likeButton.style.color = '#eee';
            likeButton.style.fontWeight = '800';
            historyButton.style.color = '#717171';
            historyButton.style.fontWeight = '500'
        } else if (component === 'history') {
            likeButton.style.borderBottom = 'none';
            historyButton.style.borderBottom = '2px solid rgb(222, 42, 96)';
            historyButton.style.color = '#eee';
            historyButton.style.fontWeight = '800';
            likeButton.style.color = '#717171';
            likeButton.style.fontWeight = '500'
        }
    }

    return (
        <>
            <Header></Header>
            <div id='myPage'>
                <div className='myPage_menu'>
                    <button className='lockerContent' onClick={() => sectionChange('locker')}><p>보고싶어요</p></button>
                    <button className='historyContent' onClick={() => sectionChange('history')}><p>최근본작품</p></button>
                </div>
            </div>
        </>
    )
}

export default Mypage;