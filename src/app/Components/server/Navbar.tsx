import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarClient from "../client/NavbarClient";
import { CSSProperties } from "react";

export default function Navbarpage({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Navbar sticky="top" className={className} style={style} expand="lg">
      <Container
        fluid
        style={{
          padding: "10px",
        }}
      >
        <NavbarClient />
      </Container>
    </Navbar>
  );
}
