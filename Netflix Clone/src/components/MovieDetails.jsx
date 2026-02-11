import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, ListGroup, Badge } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResp = await fetch(`http://www.omdbapi.com/?apikey=a5ac38ca&i=${movieId}`);
        const movieData = await movieResp.json();
        setMovie(movieData);

        const commentsResp = await fetch(`http://www.omdbapi.com/comments/${movieId}`);
        if (commentsResp.ok) {
          const commentsData = await commentsResp.json();
          setComments(commentsData);
        }
      } catch (error) {
        console.error("Errore nel recupero dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <Container className="text-light mt-5">
      <Row>
        <Col md={4} className="mb-4">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded shadow" />
        </Col>

        <Col md={8}>
          <h1 className="fw-bold">{movie.Title}</h1>
          <div className="mb-3">
            <Badge bg="secondary" className="me-2">
              {movie.Year}
            </Badge>
            <Badge bg="danger" className="me-2">
              {movie.Rated}
            </Badge>
            <span className="text-muted">{movie.Runtime}</span>
          </div>
          <p className="lead">{movie.Plot}</p>
          <hr className="bg-secondary" />
          <p>
            <strong>Regia:</strong> {movie.Director}
          </p>
          <p>
            <strong>Cast:</strong> {movie.Actors}
          </p>

          <h4 className="mt-5 mb-3">Recensioni degli utenti</h4>
          <ListGroup variant="flush">
            {comments.length > 0 ? (
              comments.map((c) => (
                <ListGroup.Item key={c._id} className="bg-transparent text-light border-secondary px-0">
                  <div className="d-flex justify-content-between">
                    <strong>{c.author}</strong>
                    <span>{"⭐".repeat(c.rate)}</span>
                  </div>
                  <p className="small mb-0">{c.comment}</p>
                </ListGroup.Item>
              ))
            ) : (
              <p className="text-muted italic">Nessun commento disponibile per questo film.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
