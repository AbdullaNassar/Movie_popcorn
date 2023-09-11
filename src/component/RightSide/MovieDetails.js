import "./MovieDetails.css"
function MovieDetails(){
    return(
        <div>
            <div className="poster-container">
                <img src="https://tse2.explicit.bing.net/th?id=OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-&pid=Api&P=0&h=180"/>
                <div>
                    <h2>Intrestaller</h2>
                    <p>03 july 2002. 116 min</p>
                    <p>Adventure, comedy, sci-fu</p>
                    <p>⭐ 8.5 IMDB rating</p>
                </div>
            </div>
            <div className="rating-container">
                <span>⭐⭐⭐⭐⭐7</span>
                <button>+Add to list</button>
            </div>
            <div className="movie-details-info">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>
            </div>
        </div>
    );
}
export default MovieDetails;