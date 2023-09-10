 import './App.css';
import { useState,useEffect } from 'react';
import Header from './component/Header/Header';
import Card from './component/UI/Card';
import MovieList from './component/leftSide/MovieList';
import MoviesWatched from './component/RightSide/MoviesWatched';
// https://www.omdbapi.com/?apikey=480f6201&s=test
function App() {
  const [query,setQuery]=useState('');
  const[movies,setMovies]=useState([1,2,3]);
  return (
    <div className='app'>
    <Header onChange={(e)=>{
      setQuery(e.target.value);
    }}/>
    <div style={{display:"flex"}}>
    <Card>
      <MovieList movies={movies} />
    </Card>
    <Card>
      <MoviesWatched/>
    </Card>
    </div>
    </div>
   
  );
}

export default App;
