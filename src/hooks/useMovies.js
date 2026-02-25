import { useState } from 'react';
import { searchMulti, getDetails } from '../services/tmdb';

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const results = await searchMulti(query);
      setMovies(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const selectItem = async (id, type) => {
    setLoading(true);
    setError(null);
    try {
      const details = await getDetails(id, type);
      setSelected(details);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearSelected = () => setSelected(null);

  return { movies, selected, loading, error, search, selectItem, clearSelected };
}