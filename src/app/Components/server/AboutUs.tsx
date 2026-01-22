import { Col, Container, Row } from "react-bootstrap";
import ParentHeight from "../client/ParentHeight";

export default function AboutUS() {
  return (
    <ParentHeight className="" id="aboutus" style={{}}>
      <Container fluid className="height p-0">
        <Row className="height justify-content-md-center">
          <Col sm="10" style={{ padding: "50px" }}>
            <div className="borderClass">
              <h1 style={{ textAlign: "center" }}>
                <u>About us </u>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt saepe totam nostrum. Rerum, eius voluptatibus similique
                laborum sit fuga quam iure ratione obcaecati! Voluptates quaerat
                reiciendis ipsa commodi facere dolores.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ParentHeight>
  );
}
