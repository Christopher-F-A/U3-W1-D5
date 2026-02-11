import { Container } from "react-bootstrap";
import Gallery from "./Gallery";

const TVShows = () => {
  return (
    <Container fluid className="px-4">
      <h2 className="text-light mt-3">TV Shows</h2>
      <Gallery title="Trending Now" searchQuery="Stranger Things" />
      <Gallery title="Sci-Fi Series" searchQuery="Black Mirror" />
    </Container>
  );
};

export default TVShows;
