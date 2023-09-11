import "./Movie.css"
function Movie({clickMovie, movie}){
    // console.log(movie);
    return(
    
        <div className="movie-container" onClick={()=>{
            // console.log('here');
    
            clickMovie(movie.imdbID);
        }}>
            <img src={movie.Poster}/>
            <div className="movie-inside">
                <p>{movie.Title}</p>
                <p>📅 {movie.Year}</p>
            </div>
        </div>
       
   
    );
}

export default Movie;