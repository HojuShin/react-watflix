import './slide.css';
import movie from '../../../data/movie.json';

function Slide() {
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
                                <a><img src={movie[0].detailImg} alt={movie[0].title}></img></a>
                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide01'></label>
                            <label htmlFor='slide03'></label>
                                <a><img src={movie[1].detailImg} alt={movie[1].title}></img></a>
                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide02'></label>
                            <label htmlFor='slide04'></label>
                                <a><img src={movie[2].detailImg} alt={movie[2].title}></img></a>
                        </div>
                    </li>
                    <li className='slideItem'>
                        <div>
                            <label htmlFor='slide03'></label>
                            <label htmlFor='slide01'></label>
                                <a><img src={movie[3].detailImg} alt={movie[3].title}></img></a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Slide;