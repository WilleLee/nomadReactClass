import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, year, poster, rating, genres, summary}){
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>
          {`${title} (${year})`}
        </Link>
      </h2>
      <img src={poster} alt="poster of the movie" />
      <ul>
        <li>rating : {rating}</li>
        <li>genres : {genres.join(", ")}</li>
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string
};

export default Movie;