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

    function add(){
        addtolist(id);
        // Step 1: Retrieve the current list from local storage
var watchedList = localStorage.getItem('watched');

// Step 2: Parse the retrieved value into an array
watchedList = watchedList ? JSON.parse(watchedList) : [];

// Step 3: Add the new value to the array
watchedList.push(`${id}`);

// Step 4: Convert the updated array back into a string
watchedList = JSON.stringify(watchedList);

// Step 5: Store the updated string back in local storage
localStorage.setItem('watched', watchedList);
    }
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
                <button onClick={add}>+Add to list</button>
            </div>
            <div className="movie-details-info">
                <p>{data.Plot}</p>
            </div>
        </div>
    );
}
export default MovieDetails;