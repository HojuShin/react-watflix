import { useState, useEffect } from 'react';

// 영화 데이터 가져오는 커스텀 훅. 
const useMovieData = () => {

    // 영화 데이터를 저장하는 상태
    const [movieData, setMovieData] = useState([]);

    // 데이터 로딩 여부 나타내는 상태
    const [loading, setLoading] = useState(true);

    // 컴포넌트가 마운트될 때 한번만 데이터를 가져옴
    useEffect(() => {
        // 데이터 비동기적으로 가져오는 함수
        const fetchData = async () => {
            try {
                const response = await fetch('https://hojushin.github.io/data/movies.json', { cache: 'force-cache' });
                const result = await response.json();
                setMovieData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie data:', error);
                setLoading(false);
            }
        };

        // 컴포넌트가 마운트될 때 fetchData 함수를 호출하여 데이터를 가져dha
        fetchData();
    }, []); // 빈 배열을 전달하여 마운트될 때만 실행되도록 함.

    // 두 상태를 반환.
    return { movieData, loading };
};

export default useMovieData;

