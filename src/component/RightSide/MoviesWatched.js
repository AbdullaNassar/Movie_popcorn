import "./MoviesWatched.css"
function MoviesWatched(){
    return(
        <div className="movies-watched-container">
            <p>Movies You watched</p>
            <div className="info">
                <div className="movies-count">
                    <p>1</p>
                    <p>movies</p>
                </div>
                <label>⭐8.60</label>
                <label>🌟9</label>
                <label>⏲170min</label>
            </div>
        </div>
    );
}
export default MoviesWatched;