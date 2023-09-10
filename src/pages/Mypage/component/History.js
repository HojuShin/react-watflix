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
export default History ;