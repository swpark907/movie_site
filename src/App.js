import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 5d4aa999

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5d4aa999";

const App = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(null);
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              searchMovies(query);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(query);
          }}
        />
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
