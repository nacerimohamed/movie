import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Details from './components/Details';
import { useMovies } from './hooks/useMovies';
import './App.css';
// Supprimez l'import suivant si vous utilisez App.module.css (inutile d'importer les deux)
// import './App.module.css';

export default function App() {
  const { movies, selected, loading, error, search, selectItem, clearSelected } = useMovies();

  return (
    <div className="app">
      <h1>🎬 Movie & Series Finder</h1>
      <SearchBar onSearch={search} />

      {loading && <div className="loader">Chargement...</div>}
      {error && <div className="error">❌ {error}</div>}

      {selected && <Details item={selected} onClose={clearSelected} />}

      <div className="grid">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            onClick={() => selectItem(item.id, item.media_type)}
          />
        ))}
      </div>
    </div>
  );
}