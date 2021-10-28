import { Container, Card, Image } from "react-bootstrap";
import "./product.css";

function Product() {
  return (
    <div className="mt-00">
      <Container className="d-flex justify-content-between">
        <Card className="card-strend">
          <Card.Body>
            <Image className="icon-hero mb-3" />
            <h4 className="mb-3">Best Price Guarantee</h4>
            <p>A small river named Duren flows by their place and supplies</p>
          </Card.Body>
        </Card>
        <Card className="card-strend">
          <Card.Body>
            <Image className="icon-hero mb-3" />
            <h4 className="mb-3">Travellers Love Us</h4>
            <p>A small river named Duren flows by their place and supplies</p>
          </Card.Body>
        </Card>
        <Card className="card-strend">
          <Card.Body>
            <Image className="icon-hero mb-3" />
            <h4 className="mb-3">Best Travel Agent</h4>
            <p>A small river named Duren flows by their place and supplies</p>
          </Card.Body>
        </Card>
        <Card className="card-strend">
          <Card.Body>
            <Image className="icon-hero mb-3" />
            <h4 className="mb-3">Our Dedicated Support</h4>
            <p>A small river named Duren flows by their place and supplies</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Product;
