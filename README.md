# <span style="color:orange">원형 프로그레스 바 애니메이션 및 로직 설명</span> 

```javascript
    // 각 원형 프로그레스 바의 진행률 (0% 초기값 설정)
    const [counters, setCounters] = useState([0, 0, 0]);
    // 각 원형 프로그레스 바가 도달해야 하는 목표 진행률 
    const [percent, setPercent] = useState([80, 90, 70]);

    // 컴포넌트 렌더링, counters 혹은 percent 값 변경시 
    useEffect(() => {
        // percent 배열 순회하며 각 원형 프로그레스 바에 대한 타이머를 설정
        const timers = percent.map((e, i) => {
            return setInterval(() => {
                if (counters[i] < e) {
                    setCounters((prevCounters) => {
                        // 이전 상태(prevCounters)를 기반으로 새로운 상태를 계산
                        const newCounters = [...prevCounters];// 이전 상태를 복사
                        newCounters[i] += 1; // 새로운 상태를 계산
                        return newCounters; // 새로운 상태를 반환 
                    });
                }
            }, 15);
        });

       ......

    }, [counters, percent]);
```
<br>

코드에서 ``counters[i]`` 가 ``percent[i]`` 의 값과 동일해질 때까지 1을 증가시키는 것이 목표임.<br> 이렇게 하면 각각의 원형 프로그레스 바가 자연스럽게 목표 진행률에 도달할 때까지 진행된다! 

예시)

- 초기 상태:
  - ``counters`` 배열: [0, 0, 0] <br>
  - ``percent`` 배열: [80, 90, 70]<br><br>

- 첫 번째 타이머 실행:
  - ``counters[0]`` 가 1로 증가: [1, 0, 0]<br><br>

- 두 번째 타이머 실행:
  - ``counters[0]`` 가 2로 증가: [2, 0, 0]<br>
...
<br>
<br>

``counters[0]`` 가 __80과 같아지면 첫 번째 원형 프로그레스 바가 80%로 완료됨.__

이런 식으로 ``counters[i]``가 ``percent[i]``의 값과 __동일해질 때까지 1씩 증가시켜서__ 각 원형 프로그레스 바가 목표 진행률에 도달된다! 이게 원형 프로그레스 바의 애니메이션을 담당하는 부분이다 

---
<br>

```javascript
 useEffect(() => {
      ......

        // 컴포넌트 언마운트 함수 (모든 타이머 중지) 
        return () => {
            // timers 배열에 있는 각 타이머를 순회하면서 clearInterval(timer)를 호출하여 해당 타이머 중지 
            timers.forEach((timer) => {
                clearInterval(timer);
            });
            // 타이머 중지되어 애니메이션이 다시 시작될때 처음상태로 돌아감 
            clearInterval(resetAnimation); 
        };
    }, [counters, percent]);
```

``forEach`` 함수는 배열의 각 요소에 대해 주어진 콜백 함수를 실행.<br>
``forEach`` 함수를 사용하여 배열의 모든 요소를 순회하고, 각각에 대해 clearInterval을 호출하여 타이머를 중지시킴! 