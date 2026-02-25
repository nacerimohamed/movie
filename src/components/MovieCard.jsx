import styles from './MovieCard.module.css';

export default function MovieCard({ item, onClick }) {
  const image = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/300x450";

  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={item.title || item.name} />
      <h3>{item.title || item.name}</h3>
    </div>
  );
}