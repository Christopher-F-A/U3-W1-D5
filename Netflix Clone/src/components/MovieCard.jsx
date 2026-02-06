import { Col } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col className="mb-2 px-1">
      <div className="movie-poster-container position-relative">
        <div className="movie-title-overlay">{movie.Title}</div>

        <img className="img-fluid movie-poster" src={movie.Poster} alt={movie.Title} />
      </div>
    </Col>
  );
};

export default MovieCard;
