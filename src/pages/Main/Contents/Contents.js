import React from "react";
import { Link } from "react-router-dom";
import './contents.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import useMovieData from "../../../utils/useData";

function Contents() {

    // movieData와 loading 상태 가져오기
    const { movieData, loading } = useMovieData();

    // 만약 데이터가 로딩 중이라면 로딩 메시지를 반환합니다.
    if (loading) {
        return <p style={{ color: '#717171' }}>Loading...</p>;
    }

    const itemNumber = 6; // 각 <li> 요소에 들어갈 영화 데이터 개수 (하나의 li 요소에 6개의 영화데이터 삽입)
    const liNumber = Math.ceil(movieData.length / itemNumber);  // <li>의 총 개수 (allMovie의 길이 / 6) = 3

    // jsx 변환
    const list = Array.from({ length: liNumber }).map((e, i) => { // list 배열 길이=3 (즉, i = 0,1,2)
        const movieList = movieData.slice(i * itemNumber, (i + 1) * itemNumber); // 0-5, 6-11, 12-17

        return (
            <li key={i}>
                {movieList.map((movie, i) => (
                    <Link to={'/detail/' + movie.id} key={movie.id}>
                        <div className="allMovie-data">
                            <img src={movie.img} alt={`contetns ${i}`} />
                        </div>
                    </Link>
                ))}
            </li>
        );
    });

    return (

        <div id="contents">
            <p>오직 <span className='watflixfont'>WATFLIX</span>에서만</p>
            <div className="contentSection">
                <input type="radio" name="slide" id="slideMv01" defaultChecked={true} ></input>
                <input type="radio" name="slide" id="slideMv02" ></input>
                <div className="slidewrap">
                    <div className="slide-control">
                        <div className="control01">
                            <label htmlFor="slideMv02" className="right">
                                <FontAwesomeIcon icon={faChevronRight} style={{ color: '#98989a' }} />
                            </label>
                        </div>
                        <div className="control02">
                            <label htmlFor="slideMv01" className="left">
                                <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#98989a' }} />
                            </label>
                        </div>
                    </div>
                    <ul className="slidelist">
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contents;