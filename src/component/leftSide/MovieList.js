import { useState,useEffect } from "react";
import "./MovieList.css"
import Movie from "./Movie";
function MovieList({movies,clickMovie}){   
    // console.log('from movies');
    // console.log(movies) ;
    return(
        <div className="movie-list">
            {movies.map((e)=>{
                return(
                    < Movie clickMovie={clickMovie}/>
                );
            })}

        </div>
    );
}

export default MovieList;