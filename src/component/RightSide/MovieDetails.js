import { useEffect,useState } from "react";
import "./MovieDetails.css"
function MovieDetails({id,addtolist}){
    const[data, setData]=useState([]);
    useEffect(function(){
        async function fetchData(){
            let res= await fetch(`https://www.omdbapi.com/?apikey=480f6201&i=${id}`);
            let dataRes= await res.json();
            // console.log(dataRes);
            setData(dataRes);
        }
        fetchData();
    },[id])

    return(
        <div>
            <div className="poster-container">
                <img src={data.Poster}/>
                <div>
                    <h2>{data.Title}</h2>
                    <p>{data.Released}. {data.Runtime} min</p>
                    <p>{data.Genre}</p>
                    <p>⭐{data.imdbRating} IMDB rating</p>
                </div>
            </div>
            <div className="rating-container">
                <span>⭐⭐⭐⭐⭐7</span>
                <button onClick={()=>{
                    console.log('here');
                    addtolist(id);
                }}>+Add to list</button>
            </div>
            <div className="movie-details-info">
                <p>{data.Plot}</p>
            </div>
        </div>
    );
}
export default MovieDetails;