import MyNavbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { Container, Dropdown, ButtonGroup } from "react-bootstrap";

const App = () => {
  return (
    <div style={{ backgroundColor: "#221f1f", minHeight: "100vh" }}>
      <MyNavbar />

      <Container fluid className="px-4 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="text-light mb-0">TV Shows</h2>
            <Dropdown as={ButtonGroup} className="ms-4">
              <Dropdown.Toggle variant="outline-light" size="sm" className="rounded-0 bg-dark">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item>Comedy</Dropdown.Item>
                <Dropdown.Item>Drama</Dropdown.Item>
                <Dropdown.Item>Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="text-light">
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>

        <Gallery title="Trending Now" searchQuery="Harry Potter" />
        <Gallery title="Watch it Again" searchQuery="Lord of the Rings" />
        <Gallery title="New Releases" searchQuery="Star Wars" />

        <Footer />
      </Container>
    </div>
  );
};

export default App;
