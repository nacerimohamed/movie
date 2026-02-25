import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Details from "./components/Details";
import "./App.css";

const API_KEY = "9de1d71c6a96910c1f470d729aaf315f";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);

  const searchMovies = async (query) => {
    if (!query) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();

    setMovies(
      (data.results || []).filter(
        (item) => item.media_type === "movie" || item.media_type === "tv"
      )
    );
  };

  const getDetails = async (id, type) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
    );
    const data = await res.json();
    setSelected(data);
  };

  return (
    <div className="app">
      <h1>🎬 Movie & Series Finder</h1>

      <SearchBar onSearch={searchMovies} />

      {selected && <Details item={selected} onClose={() => setSelected(null)} />}

      <div className="grid">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            onClick={() => getDetails(item.id, item.media_type)}
          />
        ))}
      </div>
    </div>
  );
}