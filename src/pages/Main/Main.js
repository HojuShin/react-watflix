import './main.css';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide/Slide.js'
import Circular from './Circular/Circular.js';
import Contents from './Contents/Contents.js';

function Main() {

    //현재 뷰포트 사이즈 상태값 저장
    const [viewportSize, setViewportSize] = useState(window.innerWidth);

    // 현재 스크롤 위치 상태 저장
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // scroll 상태 : 브라우저 현재 스크롤 위치 
            // 브라우저가 window.pageYOffset 지원하지 않을 경우 document.documentElement.scrollTop 값 사용
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScroll(scrollTop);
        };

        // 컴포넌트 마운트 : 스크롤 이벤트 감지하여 handleScroll 함수 호출
        window.addEventListener('scroll', handleScroll);

        return () => {
            // 컴포넌트 언마운트 : 스크롤 이벤트 제거
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        //브라우저 창 너비를 가져와 setViewportSize 함수호출하여 상태값 업데이트 동작
        const handleResize = () => setViewportSize(window.innerWidth);

        // resize는 브라우저 창의 크기가 변경될 때 발생하는 이벤트 감지
        // resize 이벤트가 발생되면 handleResize이 호출되어 뷰포트 크기 업데이트 
        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트 시 이벤트 리스너 제거
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='container'>
                <Header></Header>
                <main>
                    <div className='background_main'>
                        <div className='background_mainSection'>
                            <div className='movieMain'>
                                <span className='movieMainDesc'>이주의 인기작</span>
                                <p className='hot'>Hot</p>
                                <span className='movieTitle_main'>오펜하이머</span>
                                <img src='https://www.themoviedb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'
                                    alt='minImg'></img>
                            </div>
                            <div className='movieMain'>
                                <span className='movieMainDesc'>새로 올라온 콘텐츠</span>
                                <p className='new'>New</p>
                                <span className='movieTitle_main'>스파이더맨: 어크로스 더 유니버스, 이두나! 등</span>
                                <Slide />
                            </div>
                        </div>
                        <div className='promotion'>
                            <div className='promotion_bar'>
                                <div className='promotion_bar_desc'>
                                    <p>7,000원으로 만나는 왓플릭스.</p>
                                    <span>지금 구독 시작하고 모든 콘텐츠를 무제한으로 감상해보세요.</span>
                                    <Link href="/">자세히 알아보기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <section className={`movieInfoSection ${scroll > 0 ? 'scroll-animation' : ''}`} >
                    <Circular />
                    <Contents />
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main;