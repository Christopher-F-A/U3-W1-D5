import { Col } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col className="mb-2 text-center px-1">
      <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
    </Col>
  );
};

export default MovieCard;
