import { useState,useEffect } from "react";
import "./MovieList.css"
import Movie from "./Movie";
function MovieList({clickMovie,query,num}){
    const[moviesData, setMoviesData]=useState([]);
    //https://www.omdbapi.com/?apikey=480f6201&s=test 
    useEffect(function(){
        async function fetchData(){
            let res= await fetch(`https://www.omdbapi.com/?apikey=480f6201&s=${query}`)
            let data=await res.json();
            // console.log('here');
            
            if(data.Response==="False"){
                // setMoviesData(data.Search)
                // console.log('here');
                setMoviesData([]);
                num(0);
                return;
            }
            // console.log(data.Search);
            num(data.Search.length)
            setMoviesData(data.Search);
        }
        fetchData();
        // console.log('here');
    },[query])
    // console.log(moviesData);
    return(
        
        <div className="movie-list">
           {moviesData.length&&  moviesData.map((e)=>{
                return(
                    < Movie key={Math.random()} movie={e} clickMovie={clickMovie}/>
                );
            })
           }

        </div>
    );
}

export default MovieList;