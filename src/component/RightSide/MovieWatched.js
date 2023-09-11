import "./MovieWatched.css"
function MovieWatched({clickMovie,movie}){
    return(
        <div className="movie2-container" onClick={clickMovie}>
            <img src={movie.Poster} alt="movie2"/>
            <div className="movie2-inside">
                <p>{movie.Title}</p>
                <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                    <p>⭐{movie.imdbRating} </p> 
                    <p> ⌛{movie.Runtime} </p>
                </div>
            </div>
        </div>
    );
}
export default MovieWatched;