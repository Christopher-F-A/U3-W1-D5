import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/tv-shows" className="nav-link">
              TV Shows
            </Link>
            <Link to="/Movies" className="nav-link">
              Movies
            </Link>
            <Link to="/Recently-Added" className="nav-link">
              Recently Added
            </Link>
            <Link to="/My-List" className="nav-link">
              My List
            </Link>
          </Nav>

          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <span id="kids" className="fw-bold">
              KIDS
            </span>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
