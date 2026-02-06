import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Row className="mb-3">
              <Col>
                <i className="bi bi-facebook footer-icon me-3"></i>
                <i className="bi bi-instagram footer-icon me-3"></i>
                <i className="bi bi-twitter-x footer-icon me-3"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>

            <Row xs={1} sm={2} md={4} className="footer-links">
              <Col>
                <p>
                  <a href="#">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#">Media Center</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Contact us</a>
                </p>
              </Col>

              <Col>
                <p>
                  <a href="#">Audio Description</a>
                </p>
                <p>
                  <a href="#">Investor Relations</a>
                </p>
                <p>
                  <a href="#">Legal Notices</a>
                </p>
              </Col>

              <Col>
                <p>
                  <a href="#">Help Center</a>
                </p>
                <p>
                  <a href="#">Jobs</a>
                </p>
                <p>
                  <a href="#">Cookie Preferences</a>
                </p>
              </Col>

              <Col>
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
                <p>
                  <a href="#">Corporate Information</a>
                </p>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Button variant="outline-secondary" size="sm" className="footer-button rounded-0">
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
