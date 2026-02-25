export default function Details({ item, onClose }) {
  const image = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
    : "";

  return (
    <div className="details">
      <button onClick={onClose}>Close</button>
      <h2>{item.title || item.name}</h2>
      {image && <img src={image} alt="backdrop" />}
      <p>{item.overview}</p>
      <p>⭐ Rating: {item.vote_average}</p>
      <p>
        📅 {item.release_date || item.first_air_date}
      </p>
    </div>
  );
}