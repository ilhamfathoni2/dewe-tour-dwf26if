import { Container, Navbar, Image, Row, Col } from "react-bootstrap";
import Logo from "../src-assets/Icon.png";
import "./bassic.css";
import Login from "./login";

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
                <Login />
              </Col>
              <Col></Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMain;
