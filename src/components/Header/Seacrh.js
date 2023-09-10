import { useState } from 'react';
import './search.css';
import allMovie from '../../data/allMovie.json';
import { Link } from 'react-router-dom';

function Search() {
    // 사용자 입력값
    const [userInput, setUserInput] = useState('');
    console.log(userInput)

    // 입력값과 일치하는 영화 데이터값 추출 
    const filterMovie = allMovie.filter((movie) => {
        //문자내 공백 제거 
        const movieWithoutSpaces = movie.title.replace(/\s/g, '');
        const userInputWithoutSpaces = userInput.replace(/\s/g, '');

        //영화 데이터 목록 중 사용자 입력값과 일치하는 영화 데이터 return 
        return movieWithoutSpaces.includes(userInputWithoutSpaces)
    })
    console.log('일치값', filterMovie)

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="콘텐츠 검색"
                    id="search-Data"
                    onChange={(e) => { setUserInput(e.target.value) }}>
                </input>
                <div className="srcollBar">
                    <div className="searchSectionHistory">
                        {/* 검색어와 일치하는 영화정보 보여주기 */}
                        {filterMovie.map((data, i) => (
                            <Link key={i} to={`/detail/${data.id}`}>
                                <div className="searchResult">
                                    <div className="searchResultImg">
                                        <img src={data.img} alt={`Image ${i}`} />
                                    </div>
                                    <div className="searchResultTitle">
                                        <p>{data.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;