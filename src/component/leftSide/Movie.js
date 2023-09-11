import "./Movie.css"
function Movie({clickMovie}){
    return(
    
        <div className="movie-container" onClick={clickMovie}>
            <img src="data:image/jpeg;base64,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" alt="movie"/>
            <div className="movie-inside">
                <p>Intesteler</p>
                <p>📅 2014</p>
            </div>
        </div>
       
   
    );
}

export default Movie;