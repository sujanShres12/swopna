import { Col, Container, Row } from "react-bootstrap";
import { CSSProperties } from "react";
import ParentHeight from "../client/ParentHeight";

export default function Home({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <ParentHeight className={className || ""} style={{ ...style }} id="home">
      <Container fluid className="borderClass p-0">
        <Row className="height">
          <Col sm="12">
            asfhksajfkjshdfkj
            {/* <iframe
              src="https://www.youtube.com/embed/6FEsFvZ-hqY?si=-9_qPMTcMoX6Tvr5"
              height={"100%"}
              width={"100%"}
              allow={"autoplay"}
            /> */}
          </Col>
        </Row>
      </Container>
    </ParentHeight>
  );
}
