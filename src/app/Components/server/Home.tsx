import { Col, Container, Row } from "react-bootstrap";
import { CSSProperties } from "react";
import ParentHeight from "../client/ParentHeight";
import ContactCard from "../client/ContactCard";
import CaraousalTemplate from "../client/CaraouselTemplate";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const show = 4;
const item: number[] = [];
for (let i = 0; i < show; i++) {
  item.push(i);
}

export default function Home({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <ParentHeight className={className || ""} style={{ ...style }} id="home">
      <Container fluid className="height p-0">
        <Row className="height" style={{}}>
          <Col sm="12" className="borderClass height">
            {/* <CaraousalTemplate
              others={{
                swipeable: false,
                autoPlay: true,
                pauseOnHover: true,
                infinite: true,
              }}
              responsive={responsive}
            >
              {item.map(() => {
                return <ContactCard />;
              })}
            </CaraousalTemplate> */}

            <iframe
              src="https://www.youtube.com/embed/6FEsFvZ-hqY?si=-9_qPMTcMoX6Tvr5"
              height={"100%"}
              width={"100%"}
              allow={"autoplay"}
            />
          </Col>
        </Row>
      </Container>
    </ParentHeight>
  );
}
