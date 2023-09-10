import { useState,useEffect } from "react";
import "./MovieList.css"
import Movie from "./Movie";
function MovieList({movies}){   
    // console.log('from movies');
    // console.log(movies) ;
    return(
        <div className="movie-list">
            {movies.map((e)=>{
                return(
                    <Movie/>
                );
            })}

        </div>
    );
}

export default MovieList;