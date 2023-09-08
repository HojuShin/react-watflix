import './common.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteLocker } from '../../../redux/store';

function Locker() {

    const storeState = useSelector((state) => state.locker);
    const dispatch = useDispatch();

    return (
        <section className='mp_locker'>
            {
                storeState.map((e, i) => {
                    return (
                        <div className='mp_locker_li' key={i}>
                            <div className='locker_li'
                                style={{
                                    backgroundImage: `url(${storeState[i].detailImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <Link to={'/detail/' + storeState[i].id}>
                                    <div className='mp_movie'>
                                        <div className='mp_movie_li'>
                                            <div className='mp_movie_li_info'>
                                                <p>{storeState[i].title} </p>
                                                <button className='mp_deletLocker' onClick={(e) => {
                                                    e.preventDefault(); //Link 페이지 이동 제한
                                                    dispatch(deleteLocker(storeState[i]))
                                                }}>
                                                    <FontAwesomeIcon icon={faTrash} size='lg' className='deletIcon' />
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