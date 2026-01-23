import { Col, Container, Row } from "react-bootstrap";
import ParentHeight from "../client/ParentHeight";
import ContactCard from "../client/ContactCard";

export default function ContactUs() {
  return (
    <ParentHeight className="" id="contactus" style={{}}>
      <Container fluid className="height">
        <Row className="height justify-content-md-center">
          <Col sm="12" style={{ paddingTop: "50px" }}>
            <div className="borderClass">
              <h1 style={{ textAlign: "center" }}>
                <u>Services</u>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt saepe totam nostrum. Rerum, eius voluptatibus similique
                laborum sit fuga quam iure ratione obcaecati! Voluptates quaerat
                reiciendis ipsa commodi facere dolores.
              </p>
            </div>
            <div>

            </div>
          </Col>
        </Row>
      </Container>
    </ParentHeight>
  );
}
