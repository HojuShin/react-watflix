import { useEffect, useState } from 'react';
import './search.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/logo.png';
import useMovieData from '../../utils/useData';

function Search() {

    // 사용자 입력값
    const [userInput, setUserInput] = useState('');

    // localStorage 값 
    const [local, setLocal] = useState([]);

    // movieData와 loading 상태 가져오기
    const { movieData, loading } = useMovieData();

    // 공통함수 localStorage 데이터 가져오기
    const getLocalData = () => {
        const localData = localStorage.getItem('searched');
        return JSON.parse(localData);
    }
   
    // 공통함수 localStorage 데이터 업데이트
    const updateLocalData = (data) => {
        // 중복되는 객체 값 제거하기 -> Set으로 중복 제거된 data를 다시 배열 형태로 저장 
        data = Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);
        localStorage.setItem('searched', JSON.stringify(data));
    }
    // localStorage에서 데이터 가져오기, 없으면 빈 배열
    useEffect(() => {
        const localData = getLocalData() || [];

        setLocal(localData);
    }, [])

    if (loading) {
        return <p style={{color : '#717171'}}>Loading...</p>;
    }

    // 검색결과 기능 - 입력값과 일치하는 영화 데이터값 추출 
    const filterMovie = movieData.filter((movie) => {
        //문자내 공백 제거 
        const movieWithoutSpaces = movie.title.replace(/\s/g, '');
        const userInputWithoutSpaces = userInput.replace(/\s/g, '');

        //영화 데이터 목록 중 사용자 입력값과 일치하는 영화 데이터 return 
        return movieWithoutSpaces.includes(userInputWithoutSpaces)
    })


    // 검색내역 기능 - 검색어 localStorage 저장 
    const saveSearchToLocalStorage = (localdata) => {

        const recentSearched = getLocalData() || []; // localStorage에서 데이터 가져오기, 없으면 빈 배열

        // localStorage 데이터 업데이트
        recentSearched.push(localdata);
        updateLocalData(recentSearched);

        return setLocal(recentSearched); // ui 렌더링
    }

    //검색내역 삭제 기능 - 부분 지우기 동작
    const localDelete = (dataId) => {

        let searched = getLocalData();

        // dataId와 일치하는 데이터를 찾으면, 해당 데이터를 배열에서 제거
        for (var i = 0; i < searched.length; i++) {
            if (searched[i].id === dataId) {
                searched.splice(i, 1)
            }
        }
        updateLocalData(searched);

        return setLocal(searched) //ui 렌더링
    }

    // 검색내역 삭제 기능 - 모두 지우기 동작
    const localAllDelete = () => {
        const arr = []
        if (localStorage.getItem('searched')) { //검색내역이 있으면 
            updateLocalData(arr); //빈 배열을 Json 형식으로 저장 
            return setLocal(arr) // ui 렌더링 
        }
    }

    return (
        <>
            <h1 className="searchHeaderLogo">
                <Link to={'/'}>
                    <img src={Logo} className='Header_Logo_link' alt='logolink'></img>
                </Link>
            </h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="콘텐츠 검색"
                    id="search-Data"
                    onChange={(e) => { setUserInput(e.target.value) }}>
                </input>
                <div className="srcollBar">
                    <div className="searchSectionHistory">
                        {/* 1. 검색어 미입력시  */}
                        {userInput.length === 0 ? (
                            //  검색어 미입력 + 검색내역 없음 -> '검색내역 없음' 표시하기 
                            local.length === 0 ? (
                                <p className="text01">검색 내역 없음</p>
                            ) : (
                                // 검색어 미입력 + 검색내역 있음 -> 검색 내역 보여주기
                                <>
                                    <div id="recentSearchHistory">
                                        <span className="history">최근 검색한 콘텐츠</span>
                                        <span className="allDelete" onClick={() => { localAllDelete() }}>모두 지우기</span>
                                    </div>
                                    {local.map((data, i) => (
                                         <Link to={`/detail/${data.id}`}  state={{ movieData: data }} key={i}>
                                            <div className="searchResult">
                                                <div className="searchResultImg">
                                                    <img src={data.img} alt={`search ${i}`} />
                                                </div>
                                                <div className="searchResultTitle">
                                                    <p>{data.title}</p>
                                                </div>
                                                <div className="searchDelete">
                                                    <FontAwesomeIcon icon={faX}
                                                        size="xs"
                                                        className="searchedDeleteIcon"
                                                        style={{ color: 'rgb(168, 168, 168)' }}
                                                        onClick={(e) => {
                                                            e.preventDefault(); //Link 페이지 이동 제한
                                                            localDelete(data.id)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            )
                        ) : (
                            <>
                                {/* 2. 검색어 입력시 */}
                                {/* 검색어와 일치하는 영화정보 보여주기 */}
                                {filterMovie.map((data, i) => (
                                    <Link to={`/detail/${data.id}`} state={{ movieData: data }} key={data.id}>
                                        <div className="searchResult" onClick={() => saveSearchToLocalStorage(data)}>
                                            <div className="searchResultImg">
                                                <img src={data.img} alt={`result${i}`} />
                                            </div>
                                            <div className="searchResultTitle">
                                                <p>{data.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;