import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 5d4aa999

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5d4aa999'

const movie1 = {
  "Title": "Iron Man",
  "Year": "2008",
  "imdbID": "tt0371746",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async ( title ) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect ( () => {
    searchMovies('Iron')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" value="Superman" onChange={()=> {}} />
        <img src={SearchIcon} alt="search" conClick={() => {}}/>
        
      </div>

      <div className="container">
        <MovieCard movie1={movie1}></MovieCard>
      </div>
      
    </div>
  );
};

export default App;