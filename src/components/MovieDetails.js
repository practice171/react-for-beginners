function MovieDetails({ title, coverImg, year, runtime, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} />
      <div>{year}</div>
      <div>runnung time is {runtime}minutes</div>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </div>
  );
}

export default MovieDetails;
