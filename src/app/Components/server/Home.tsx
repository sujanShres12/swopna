import { Col, Container, Row } from "react-bootstrap";
import Navbarpage from "./Navbar";

export default function Home() {
  return (
    <>
      <Container fluid className="height p-0" id="home">
        <Row className="height">
          <Col sm="12">
            <iframe
              src="https://www.youtube.com/embed/6FEsFvZ-hqY?si=-9_qPMTcMoX6Tvr5"
              height={"100%"}
              width={"100%"}
              allow={"autoplay"}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="height p-0" id="aboutus">
        <Row className="height">
          <Col sm="12">sads</Col>
        </Row>
      </Container>
    </>
  );
}
