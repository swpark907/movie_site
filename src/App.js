import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import ReactLoading from "react-loading";

// 5d4aa999

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5d4aa999";

const App = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (title) => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

    console.log(isLoading);
    setIsLoading(false);
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
        {
        isLoading === true
        ? ( <ReactLoading /> )
        : (movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default App;
