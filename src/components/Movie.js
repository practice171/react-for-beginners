import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, year, genres, summary }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />

      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
