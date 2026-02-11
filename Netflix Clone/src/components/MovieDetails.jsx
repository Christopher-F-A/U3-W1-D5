import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams(); // Prende :movieId dall'URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a5ac38ca&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return <Spinner animation="border" variant="danger" />;

  return (
    <Container className="text-light mt-5">
      <Row>
        <Col md={4}>
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </Col>
        <Col md={8}>
          <h1>{movie.Title}</h1>
          <p className="text-muted">
            {movie.Year} | {movie.Genre} | {movie.Runtime}
          </p>
          <p>{movie.Plot}</p>
          <p>
            <strong>Cast:</strong> {movie.Actors}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
