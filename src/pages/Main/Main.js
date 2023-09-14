import './main.css';
import Header from '../../components/Header/Header.js';
import movie from '../../data/movie.json';
import Contents from './Contents/Contents.js';
import Footer from '../../components/Footer/Footer.js';
import { useEffect, useState } from 'react';

function Main() {

    //현재 뷰포트 사이즈 상태값 저장
    const [viewportSize, setViewportSize] = useState(window.innerWidth);

    useEffect(() => {
        //브라우저 창 너비를 가져와 setViewportSize 함수호출하여 상태값 업데이트 동작
        const handleResize = () => setViewportSize(window.innerWidth);

        // resize는 브라우저 창의 크기가 변경될 때 발생하는 이벤트 감지
        // resize 이벤트가 발생되면 handleResize이 호출되어 뷰포트 크기 업데이트 
        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트 시 이벤트 리스너 제거
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 뷰포트 사이즈에 따라 이미지를 변경에 대한 조건부 설정
    const showNewImage = viewportSize < 850;
    
    return (
        <>
            <div className='container'>
                <Header></Header>
                <main>
                    <div className='backgroundSection'>
                        <input type='radio' className='slide' id='slide01' defaultChecked></input>
                        <input type='radio' className='slide' id='slide02'></input>
                        <input type='radio' className='slide' id='slide03'></input>
                        <input type='radio' className='slide' id='slide04'></input>
                        <ul className='slideList'>
                            <li className='slideItem'>
                                <div>
                                    <label htmlFor='slide04'></label>
                                    <label htmlFor='slide02'></label>
                                    {showNewImage ? (
                                        <a><img className="new-image" src={movie[0].img} alt={movie[0].title}></img></a>
                                    ) : (
                                        <a><img src={movie[0].detailImg} alt={movie[0].title}></img></a>
                                    )}
                                </div>
                            </li>
                            <li className='slideItem'>
                                <div>
                                    <label htmlFor='slide01'></label>
                                    <label htmlFor='slide03'></label>
                                    {showNewImage ? (
                                        <a><img className="new-image" src={movie[1].img} alt={movie[1].title}></img></a>
                                    ) : (
                                        <a><img src={movie[1].detailImg} alt={movie[1].title}></img></a>
                                    )}
                                </div>
                            </li>
                            <li className='slideItem'>
                                <div>
                                    <label htmlFor='slide02'></label>
                                    <label htmlFor='slide04'></label>
                                    {showNewImage ? (
                                        <a><img className="new-image" src={movie[2].img} alt={movie[2].title}></img></a>
                                    ) : (
                                        <a><img src={movie[2].detailImg} alt={movie[2].title}></img></a>
                                    )}
                                </div>
                            </li>
                            <li className='slideItem'>
                                <div>
                                    <label htmlFor='slide03'></label>
                                    <label htmlFor='slide01'></label>
                                    {showNewImage ? (
                                        <a><img className="new-image" src={movie[3].img} alt={movie[3].title}></img></a>
                                    ) : (
                                        <a><img src={movie[3].detailImg} alt={movie[3].title}></img></a>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
                <Contents />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main;