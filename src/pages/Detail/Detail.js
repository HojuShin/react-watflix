import { useParams } from 'react-router-dom';
import './detail.css';
import Header from '../../components/Header/Header.js';
import allMovie from '../../data/allMovie.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocker, deleteLocker } from '../../redux/store';

function Detail() {
    //현재 라우팅된 페이지의 url 파라미터 추출 
    const { id } = useParams();

    //현재 페이지 id 파라미터와 일치하는 영화 데이터 가져와서 matchId에 저장 
    const matchId = allMovie.find((movie) => { return movie.id == id });

    // redux store 가져오기 
    const state = useSelector((state) => state.locker);
    const dispatch = useDispatch();
    console.log('리덕스', state);

    // 보고싶어요 버튼 클릭 상태
    const [onclick, setOnClick] = useState(false);

    // 보고싶어요 버튼 클릭 동작 
    const handleClick = () => {
        setOnClick(!onclick);

        // store에 이미 추가되었다면, 데이터를 store에서 삭제
        // 그렇지 않으면, 데이터를 store에 추가
        if (onclick) {
            return dispatch(deleteLocker(matchId))
        } else if (!onclick === true) {
            return dispatch(addLocker(matchId))
        }
    };

    return (
        <>
            <Header></Header>
            <div id="detail">
                <div className="detailSection" style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, black), url(${matchId.detailImg})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="mvInfo">
                        <div className='mvInfo_desc'>
                            <h1 className='title'>{matchId.title} </h1>
                            {matchId.genre.map((genre, index) => (
                                <span key={index}>{genre}</span>
                            ))}
                            <span>｜ {matchId.released}</span>
                        </div>
                        <p className='movieStory'>{matchId.story}</p>
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
            </div>
        </>
    )
}

export default Detail;