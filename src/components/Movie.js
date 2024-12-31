import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie({ id, title, coverImg, year, genres }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <img src={coverImg} />
      <span>{year}</span>
      <div>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
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
