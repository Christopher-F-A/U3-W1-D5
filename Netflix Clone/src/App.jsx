import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import { Container, Dropdown } from "react-bootstrap";

function App() {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column text-start">
      {" "}
      {/* text-start per sicurezza */}
      <MyNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <Container fluid className="px-4">
                {/* Header con Dropdown */}
                <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
                  <div className="d-flex align-items-center">
                    <h2 className="mb-0 text-light me-4 fw-bold">TV Shows</h2>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-0 text-light border-light fw-bold"
                        style={{ backgroundColor: "#221f1f" }}
                      >
                        Genres
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#">Drama</Dropdown.Item>
                        <Dropdown.Item href="#">Thriller</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="d-none d-md-block text-light">
                    <i className="bi bi-grid icons border border-secondary p-2"></i>
                    <i className="bi bi-grid-3x3 icons border border-secondary p-2"></i>
                  </div>
                </div>

                {/* Gallerie */}
                <Gallery title="Harry Potter" searchQuery="harry potter" />
                <Gallery title="Lord of the Rings" searchQuery="lord of the rings" />
                <Gallery title="Star Wars" searchQuery="star wars" />
              </Container>
            }
          />

          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
