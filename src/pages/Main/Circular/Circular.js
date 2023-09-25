import './circular.css';
import { useEffect, useState } from 'react';

function Circular() {

    const [txt, setTxt] = useState(['재구독', '만족도', '어쩌구'])
    const [counters, setCounters] = useState([0, 0, 0]);  // 각 원형 프로그레스 바의 진행률 (0% 초기값 설정)
    const [percent, setPercent] = useState([81, 90, 72]); // 각 원형 프로그레스 바가 도달해야 하는 목표 진행률 

    useEffect(() => {
        // percent 배열 순회하며 각 원형 프로그레스 바에 대한 타이머를 설정
        const timers = percent.map((e, i) => {
            return setInterval(() => {
                if (counters[i] < e) {
                    setCounters((prevCounters) => {  // 이전 상태(prevCounters)를 기반으로 새로운 상태를 계산
                        const newCounters = [...prevCounters];// 이전 상태를 복사
                        newCounters[i] += 1; // 새로운 상태를 계산
                        return newCounters; // 새로운 상태를 반환 
                    });
                } else {
                    // 원형 프로그레스 바가 목표에 도달하면 타이머 중지
                    clearInterval(timers[i]);
                }
            }, 15);
        });

        // 5초마다 원형 프로그레스 바를 초기 상태로 재설정
        const resetAnimation = setInterval(() => {
            setCounters([0, 0, 0]);
        }, 5000);

        // 컴포넌트 언마운트 함수 (모든 타이머 중지) 
        return () => {
            timers.forEach((timer) => {
                clearInterval(timer);
            });
            clearInterval(resetAnimation); // 타이머 중지되어 애니메이션이 다시 시작될때 처음상태로 돌아감 
        };
    }, [counters, percent]);

    // 애니메이션 함수
    const circleStyles = percent.map((e, i) => ({
        background: `conic-gradient(rgb(222, 42, 96) ${3.6 * counters[i]}deg, #333 0deg)`,
        transition: 'transform 5s linear'
    }));

    return (
        <>
            <div className='circular'>
                <p className='circularDesc'><strong>5000만</strong>이 시청하는 WATFLIX !</p>
                <div className='circularBx'>
                    {percent.map((e, index) => (
                        <div className="circle" key={index} style={circleStyles[index]}>
                            <h1 className="num">{`${counters[index]}%`}</h1>
                            <span className='text'>{txt[index]}</span>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default Circular;