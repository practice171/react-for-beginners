import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MovieDetails from "../components/MovieDetails";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const getMovieDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovieDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div lassName={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>loading....</span>
        </div>
      ) : (
        <div className={styles.theMovies}>
          <MovieDetails
            title={movieDetails.title}
            coverImg={movieDetails.medium_cover_image}
            year={movieDetails.year}
            runtime={movieDetails.runtime}
            genres={movieDetails.genres}
            summary={movieDetails.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
