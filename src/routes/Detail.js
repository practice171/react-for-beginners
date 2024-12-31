import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MovieDetails from "../components/MovieDetails";
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
    <div>
      <h1>Movie Details</h1>
      <hr />
      {loading ? (
        <h2>loading....</h2>
      ) : (
        <MovieDetails
          title={movieDetails.title}
          coverImg={movieDetails.medium_cover_image}
          year={movieDetails.year}
          runtime={movieDetails.runtime}
          genres={movieDetails.genres}
        />
      )}
    </div>
  );
}

export default Detail;
