import { Row, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Gallery = ({ title, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=a5ac38ca&s=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search.slice(0, 6));
          setIsError(false);
        } else {
          setIsError(true);
        }
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  return (
    <>
      <h4 className="mt-4 text-light">{title}</h4>

      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {isError && <Alert variant="danger">Errore nel caricamento dei film.</Alert>}

      <Row xs={2} sm={2} lg={4} xl={6} className="mb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Row>
    </>
  );
};

export default Gallery;
