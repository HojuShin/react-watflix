import React from "react";
import './common.css'
import { Link } from 'react-router-dom';

function History() {

    // let으로 선언해야 값 읽기 및 변경 가능 
    let watched = localStorage.getItem('watched');
    //object 형태로 전환
    watched = JSON.parse(watched);

    return (
        <>
            <section className='mp_locker'>
                {
                    watched.length === 0 ? (
                        <div className="noLockerSection">
                            <svg width="350px" height="350px" strokeWidth="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#414141"><path d="M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#414141" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <p>작품을 둘러보세요 !</p>
                        </div>
                    ) :
                        watched.map((e, i) => {
                            return (
                                <div className='mp_locker_li' key={i}>
                                    <div className='locker_li'
                                        style={{
                                            backgroundImage: `url(${watched[i].detailImg})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        <Link to={'/detail/' + watched[i].id}>
                                            <div className='mp_movie'>
                                                <div className='mp_movie_li'>
                                                    <div className='mp_movie_li_info'>
                                                        <p>{watched[i].title} </p>
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
        </>
    )
}
export default History;