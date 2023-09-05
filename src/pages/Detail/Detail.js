import { useParams } from 'react-router-dom';
import './detail.css';
import Header from '../../components/Header/Header.js';
import allMovie from '../../data/allMovie.json';

function Detail() {
    //현재 라우팅된 페이지의 url 파라미터 추출 
    const { id } = useParams();

    //현재 페이지 id 파라미터와 일치하는 영화 데이터 가져와서 matchId에 저장 
    const matchId = allMovie.find((movie) => { return movie.id == id })

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
                            <button id="addLocker">
                                보고싶어요
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;