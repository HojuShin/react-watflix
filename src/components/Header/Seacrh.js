import './search.css';

function Search() {
    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="콘텐츠 검색"
                    id="search-Data">
                </input>
            </div>
        </>
    )
}

export default Search;