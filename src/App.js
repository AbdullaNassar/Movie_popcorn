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
  const[leftSideShown, setLeftSideSHown]=useState(true);
  const[rightSideShown, setRightSideSHown]=useState(false);
  const[showMovieDetails,setShowMovieDetails]=useState(false);
  const[selectedID,setSelectedID]=useState(null);
  const[numResult, setNumResult]=useState(0);
  const[numberOfWatchedMovies, setNumberOfWatchedMovies]=useState([]);

  function addNewWatchedMovie(id){
    setNumberOfWatchedMovies((items)=>[...items,id]);
  }
  function numfunc(num){
    setNumResult(num);
  }
  // console.log(query);
  function clickMovie(id){
    // console.log(id);
    setSelectedID(id);
    setShowMovieDetails(e=>!e);
    setRightSideSHown(false);
  }
  function removeMovie(id){
    console.log(numberOfWatchedMovies);
    let s=`${id}`;
    console.log(typeof s);
    setNumberOfWatchedMovies((items)=>
      items.filter(item=> item!==s
      )
    )
  }
  return (
    // Header 
    <div className='app'>
    <Header num={numResult} onChange={(e)=>{setQuery(e.target.value);}}/>


    <div style={{display:"flex"}}>
      {/* left side */}
    <Card>
      <button onClick={()=>setLeftSideSHown(e=>!e)}>{leftSideShown?"-":"+"}</button>
      {leftSideShown&&<MovieList num={numfunc} clickMovie={clickMovie}  query={query} />}
    </Card>
    {/* Right side */}
    <Card>
      <button onClick={()=>{
        if(showMovieDetails===true)setRightSideSHown(false);
        else setRightSideSHown(e=>!e);
      }}>{rightSideShown?"-":"+"}</button>
      {rightSideShown&&<MoviesWatched moviesID={numberOfWatchedMovies}/>}
      {rightSideShown&&<MovieWatchedlist removeMovie={removeMovie} moviesID={numberOfWatchedMovies} />}
      {showMovieDetails &&<MovieDetails addtolist={addNewWatchedMovie} id={selectedID}/>}
    </Card>
    </div>
    </div>
   
  );
}

export default App;
