import './slide.css';
import { useState, useEffect } from 'react';

function Slide() {

    // 영화 데이터를 담을 state
    const [slideMovie, setSlideMovie] = useState(null);

    // 데이터 패칭
    useEffect(() => {
        fetch('https://hojushin.github.io/data/main.json', { cache: 'force-cache' })
            .then(result => result.json())
            .then(result => setSlideMovie(result))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    // 데이터 패칭을 기다리는 동안 로딩 메세지 렌더링
    if (slideMovie === null) {
        return <p style={{color : '#717171'}}>Loading...</p>;
    }
    
    return (
        <>
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
                            <img src={slideMovie[0].detailImg} alt={`slide${slideMovie[0].id}`} />

                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide01'></label>
                            <label htmlFor='slide03'></label>
                            <img src={slideMovie[1].detailImg} alt={`slide${slideMovie[1].id}`} />

                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide02'></label>
                            <label htmlFor='slide04'></label>
                            <img src={slideMovie[2].detailImg} alt={`slide${slideMovie[2].id}`}/>
                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide03'></label>
                            <label htmlFor='slide01'></label>
                            <img src={slideMovie[3].detailImg} alt={`slide${slideMovie[3].id}`}/>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Slide;