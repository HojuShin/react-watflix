import { useParams } from 'react-router-dom';
import './detail.css';
import Header from '../../components/Header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocker, deleteLocker } from '../../redux/store';
import Footer from '../../components/Footer/Footer.js';
import useMovieData from '../../utils/useData.js';

function Detail() {

    // 현재 라우팅된 페이지의 url 파라미터 추출 
    const { id } = useParams();
    // movieData와 loading 상태 가져오기
    const { movieData, loading } = useMovieData();

    // 현재 페이지 id 파라미터와 일치하는 영화 데이터 추출해서 저장
    const detailData = movieData.find((movie) => { return movie.id == id });

    // 보고싶어요 클릭 상태
    const [onclick, setOnClick] = useState(false);

    // redux store 가져오기 
    const reduxstore = useSelector((state) => state.locker);
    const dispatch = useDispatch();

    // 보고싶어요 버튼 클릭 동작 
    const handleClick = () => {
        setOnClick(!onclick);

        if (onclick) {
            dispatch(deleteLocker(detailData)); // store에 이미 추가되었다면, 데이터를 store에서 삭제
        } else {
            dispatch(addLocker(detailData)); // 그렇지 않으면, 데이터를 store에 추가
        }
    };

    useEffect(() => {
        // 현재 페이지 localStorage 저장하기
        if (detailData) {
            let recent = localStorage.getItem('watched') || '[]'; // 초기값이 없을 때 빈 배열로 설정
            recent = JSON.parse(recent); // object 형태로 전환
            recent.push({ id: detailData.id, title: detailData.title, detailImg: detailData.detailImg });
            recent = Array.from(new Set(recent.map(JSON.stringify))).map(JSON.parse); // 중복되는 객체 값 제거하기 -> Set으로 중복 제거된 recent를 다시 배열 형태로 저장 
            localStorage.setItem('watched', JSON.stringify(recent)) // localStorage에 현재 페이지 영화 정보 저장
        }
    }, [detailData]);

    useEffect(() => {
        // state (보고싶어요)값 중 현재페이지 영화정보와 일치하는 값이 있는지 확인하여 onClick에 true 전달
        if (detailData) {
            const detailDataInLocker = reduxstore.some((movie) => movie.id === detailData.id);
            setOnClick(detailDataInLocker);
        }
    }, [detailData, reduxstore]);

    return (
        <>
            <Header></Header>
            <div id="detail">
                {loading
                    ? <p style={{ color: '#717171' }}>Loading...</p>
                    :
                    (
                        <div className="detailSection" style={{
                            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${detailData.detailImg})`,
                            backgroundSize: 'cover'
                        }}>
                            <div className="mvInfo">
                                <div className='mvInfo_desc'>
                                    <h1 className='title'>{detailData.title} </h1>
                                    {detailData.genre.map((genre, index) => (
                                        <span key={index}>{genre}</span>
                                    ))}
                                    <p className='released'>｜ {detailData.released}</p>
                                </div>
                                <p className='movieStory'>{detailData.story}</p>
                                <div className="mvPlay">
                                    <button className="playBtn">▶  PLAY NOW</button>
                                    <button id="addLocker" onClick={handleClick}>
                                        {onclick ? (
                                            <>
                                                <FontAwesomeIcon icon={faCheck} style={{ margin: '0px 10px 0px 0px', color: "rgb(222, 42, 96)" }} />
                                                보고싶어요
                                            </>
                                        ) : (
                                            <>
                                                <FontAwesomeIcon icon={faPlus} style={{ margin: '0px 10px 0px 0px', color: "#eee" }} />
                                                보고싶어요
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Detail;