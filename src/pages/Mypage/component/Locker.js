import './common.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { deleteLocker } from '../../../redux/store';

function Locker() {

    const storeState = useSelector((state) => state.locker);
    const dispatch = useDispatch();

    return (
        <section className='mp_locker'>
            {storeState.length === 0 ? (
                <div className="noLockerSection">
                    <svg width="350px" height="350px" strokeWidth="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#414141"><path d="M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#414141" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p>보고싶은 작품이 여기에 보여져요 !</p>
                </div>
            ) :
                storeState.map((e, i) => {
                    return (
                        <div className='mp_locker_li' key={i}>
                            <div className='locker_li'
                                style={{
                                    backgroundImage: `url(${storeState[i].detailImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <Link to={'/detail/' + storeState[i].id} >
                                    <div className='mp_movie'>
                                        <div className='mp_movie_li'>
                                            <div className='mp_movie_li_info'>
                                                <p>{storeState[i].title} </p>
                                                <button className='mp_deletLocker' onClick={(e) => {
                                                    e.preventDefault(); //Link 페이지 이동 제한
                                                    dispatch(deleteLocker(storeState[i]))
                                                }}>
                                                    <FontAwesomeIcon icon={faX} size="lg" className='deletIcon' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Locker;