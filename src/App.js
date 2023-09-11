 import './App.css';
import { useState,useEffect } from 'react';
import Header from './component/Header/Header';
import Card from './component/UI/Card';
import MovieList from './component/leftSide/MovieList';
import MoviesWatched from './component/RightSide/MoviesWatched';
import MovieDetails from './component/RightSide/MovieDetails';
import MovieWatchedlist from './component/RightSide/MovieWatchedlist';
// https://www.omdbapi.com/?apikey=480f6201&s=test
function App() {
  const [query,setQuery]=useState('');
  const[movies,setMovies]=useState([1,2,3]);
  const[leftSideShown, setLeftSideSHown]=useState(true);
  const[rightSideShown, setRightSideSHown]=useState(false);
  const[showMovieDetails,setShowMovieDetails]=useState(false);

  function clickMovie(){
    setShowMovieDetails(e=>!e);
    setRightSideSHown(false);

  }
  return (
    // Header 
    <div className='app'>
    <Header onChange={(e)=>{
      setQuery(e.target.value);
    }}/>
    <div style={{display:"flex"}}>
      {/* left side */}
    <Card>
      <button onClick={()=>setLeftSideSHown(e=>!e)}>{leftSideShown?"-":"+"}</button>
      {leftSideShown&&<MovieList clickMovie={clickMovie} movies={movies} />}
    </Card>

    {/* Right side */}
    <Card>
      <button onClick={()=>setRightSideSHown(e=>!e)}>{rightSideShown?"-":"+"}</button>
      {rightSideShown&&<MoviesWatched/>}
      {rightSideShown&&<MovieWatchedlist/>}
      {showMovieDetails&&<MovieDetails/>}
    </Card>
    </div>
    </div>
   
  );
}

export default App;
