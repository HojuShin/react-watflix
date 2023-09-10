import './footer.css'; 

function Footer() {
    return (
        <>
            <div id="footer">
                <section className="footerSection">
                    <ul className="footerList">
                        <li>회사소개</li>
                        <li>서비스 이용약관</li>
                        <li>개인정보 처리 방침</li>
                        <li>고객센터</li>
                    </ul>
                    <div className="company">
                        <ul className="companyInfo">
                            <li><p>고객센터(이용문의)</p>| <span>02-123-4567</span></li>
                            <li><p>전자우편주소</p>| <span>tlsghwn03@gmail.com</span></li>
                            <li><p>제휴 및 대외 협력</p>| <span>넷플릭스 / 왓챠</span> </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>Copyright© 왓플릭스(주) All rights reserved.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer;