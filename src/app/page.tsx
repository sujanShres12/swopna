import Navbar from "./Components/server/Navbar";
import Home from "./Components/server/Home";
import { Container, Row } from "react-bootstrap";
import Navbarpage from "./Components/server/Navbar";
import Service from "./Components/server/Service";
import AboutUS from "./Components/server/AboutUs";
import ContactUs from "./Components/server/Contact";

export const navHeight: React.CSSProperties = { height: "50px" };
export const navHeightValue = 50;
export default function Homepage() {
  return (
    <>
      <Navbarpage
        style={{
          backgroundColor: "#d6bbc3",
          textAlign: "center",
          padding: 0,
          ...navHeight,
        }}
      />
      <Home />
      <Service />
      <AboutUS />
      <ContactUs />
    </>
  );
}
