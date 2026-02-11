import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col className="mb-2 px-1">
      <Link to={`/movie-details/${movie.imdbID}`}>
        <div className="movie-poster-container position-relative">
          <div className="movie-title-overlay">{movie.Title}</div>
          <img className="img-fluid movie-poster" src={movie.Poster} alt={movie.Title} />
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
