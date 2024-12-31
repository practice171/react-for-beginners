import styles from "./Movie.module.css";
function MovieDetails({ title, coverImg, year, runtime, genres, summary }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} className={styles.theMovie__img} />
      <div>
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
        </div>
        <div className={styles.movie__year}>{year}</div>
        <div>runnung time is {runtime}minutes</div>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
