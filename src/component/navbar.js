import { Container, Navbar, Image, Button, Row, Col } from "react-bootstrap";
import Logo from "../src-assets/Icon.png";
import "./bassic.css";

function NavMain() {
  return (
    <>
      <div className="bg-hero-nav"></div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Image src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Row>
              <Col>
                <Button variant="outline-warning mr-3">Login</Button>
              </Col>
              <Col>
                <Button variant="warning">Register</Button>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMain;
