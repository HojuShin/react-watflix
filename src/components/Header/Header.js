import './header.css';
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {

    const location = useLocation();
    console.log('현재경로', location.pathname); //현재 경로 확인

      // 현재 경로에 따른 버튼 컬러 변경 
      const iconColor = (path) => {
        if (location.pathname === path) {
            return '#eee'; // 현재 페이지
        } else {
            return '#6f747b';
        }
    };

    return (
        <>
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
                                <button className="searchIcon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                                </button>
                            </li>
                            <li>
                                <Link to={'/myPage'}>
                                    <FontAwesomeIcon icon={faBox} size="xl" style={{ color: iconColor('/myPage') }} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="HeaderLogo">
                        <Link to={'/'}>
                            <img src={Logo} className='Header_Logo_link'></img>
                        </Link>
                    </h1>
                </div>
            </header>
        </>
    )
}

export default Header;