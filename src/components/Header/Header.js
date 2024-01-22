import './header.css';
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Search from './Seacrh.js';

function Header() {

    const location = useLocation();

    // 현재 경로에 따른 버튼 컬러 변경 
    const iconColor = (path) => {
        if (location.pathname === path) {
            return '#eee'; // 현재 페이지
        } else {
            return '#6f747b';
        }
    };

    // 검색 아이콘 오픈(클릭) 상태
    const [searchOpen, setSearchOpen] = useState(false);
    // 검색 아이콘 컬러
    const [searchColor, setSearchColor] = useState(false);

    // 검색 모달창 동작
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setSearchColor(!searchColor);
    }

    // 검색 아이콘 컬러 변경 동작
    const searchColorChange = () => {
        if (searchColor === false) {
            return '#98989a';
        } else if (searchColor === true) {
            return '#eee';
        }
    }

    return (
        <>
            <h1 className="HeaderLogo" >
                <Link to={'/'}>
                    <img src={Logo} className='Header_Logo_link' alt='headerlogo'></img>
                </Link>
            </h1>
            <header id="Header">
                <div>
                    <nav className='HeaderNav'>
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    <FontAwesomeIcon icon={faHouse} size="xl" style={{ color: iconColor('/') }} />
                                </Link>
                            </li>
                            <li>
                                {/* 검색 기능 추가예정 */}
                                <button className="searchIcon" onClick={toggleSearch} >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: searchColorChange(true) }} />
                                </button>
                            </li>
                            <li>
                                <Link to={'/myPage'}>
                                    <FontAwesomeIcon icon={faBox} size="xl" style={{ color: iconColor('/myPage') }} />
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
            {/* 검색 컴포넌트 */}
            <section className={`searchSection ${searchOpen ? 'open' : ''}`}>
                <Search></Search>
            </section>
        </>
    )
}

export default Header;