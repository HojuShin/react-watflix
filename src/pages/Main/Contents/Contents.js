import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './contents.css';
import allMovie from '../../../data/allMovie.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Circular from "../Circular/Circular";

function Contents() {

    const [scroll, setScroll] = useState(0);  // 현재 스크롤 위치 상태 저장

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

    const itemNumber = 6; // 각 <li> 요소에 들어갈 영화 데이터 개수 (하나의 li 요소에 6개의 영화데이터 삽입)
    const liNumber = Math.ceil(allMovie.length / itemNumber);  // <li>의 총 개수 (allMovie의 길이 / 6) = 3

    // jsx 변환
    const list = Array.from({ length: liNumber }).map((e, i) => { // list 배열 길이=3 (즉, i = 0,1,2)
        const movieList = allMovie.slice(i * itemNumber, (i + 1) * itemNumber); // 0-5, 6-11, 12-17

        return (
            <li key={i}>
                {movieList.map((movie, i) => (
                    <Link to={'/detail/' + movie.id} state={{ allMovie: movie }} key={movie.id}>
                        <div className="allMovie-data">
                            <img src={movie.img} alt={movie.title} />
                        </div>
                    </Link>
                ))}
            </li>
        );
    });

    return (
        <section className={`movieInfoSection ${scroll > 0 ? 'scroll-animation' : ''}`} >
            <Circular />
            <div id="contents">
                <p>오직 WATFLIX에서만</p>
                <div className="contentSection">
                    <input type="radio" name="slide" id="slideMv01" defaultChecked={true} ></input>
                    <input type="radio" name="slide" id="slideMv02" ></input>
                    <input type="radio" name="slide" id="slideMv03" ></input>
                    <div className="slidewrap">
                        <div className="slide-control">
                            <div className="control01">
                                <label htmlFor="slideMv03" className="left">
                                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#98989a' }} />
                                </label>
                                <label htmlFor="slideMv02" className="right">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: '#98989a' }} />
                                </label>
                            </div>
                            <div className="control02">
                                <label htmlFor="slideMv01" className="left">
                                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#98989a' }} />
                                </label>
                                <label htmlFor="slideMv03" className="right">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: '#98989a' }} />
                                </label>
                            </div>
                            <div className="control03">
                                <label htmlFor="slideMv02" className="left">
                                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#98989a' }} />
                                </label>
                                <label htmlFor="slideMv01" className="right">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: '#98989a' }} />
                                </label>
                            </div>
                        </div>
                        <ul className="slidelist">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents;