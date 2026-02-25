const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMulti = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  );
  if (!response.ok) throw new Error('Erreur réseau');
  const data = await response.json();
  return data.results.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv'
  );
};

export const getDetails = async (id, type) => {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error('Erreur chargement détails');
  return response.json();
};