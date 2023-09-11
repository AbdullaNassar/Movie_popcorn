import MovieWatched from "./MovieWatched";
import { useState,useEffect } from "react";
function MovieWatchedlist({moviesID,removeMovie}){
    let [movies,setMovies]=useState([]);
    let uniqueArray = [...new Set(moviesID)];
    console.log(uniqueArray);

    useEffect(function(){
        const fetchData= async()=>{
            const result=[];
            for(let i=0;i<uniqueArray.length;i++){
                const res=await fetch(`https://www.omdbapi.com/?apikey=480f6201&i=${uniqueArray[i]}`);
                const datares=await res.json();
                result.push(datares);
            }
            setMovies(result);
            // console.log(result);
            // movies=result;
        };
        fetchData();
    },[])
    
    console.log(movies);
    return(
        <>
        {
            movies.map(movie=>{
                return(
                    <MovieWatched removeMovie={removeMovie} movie={movie}/>
                )
            })
        }
        </>
    );
}
export default MovieWatchedlist;