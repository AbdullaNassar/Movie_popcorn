import "./Header.css"
function Header({value,onChange}){
    return(
        <div className="header-container">
            <div className="header-logo">
                <img src="https://tse2.mm.bing.net/th?id=OIP.ZnCt-8Xv0Qrd9HegkTf1MwHaIU&pid=Api&P=0&h=180"/>
                <p>Movie popcorn</p>
            </div>
            <input value={value} onChange={onChange} type="search" />
            <p>Found 10 results</p>
        </div>
    );
}

export default Header;