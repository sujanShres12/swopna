import Navbar from "./Components/server/Navbar";
import Home from "./Components/server/Home";
import { Container, Row } from "react-bootstrap";
import Navbarpage from "./Components/server/Navbar";

export default function Homepage() {
  return (
    <div className="height" style={{ height: "200vh" }}>
      <Navbarpage style={{backgroundColor:'#d6bbc3',height:'50px'}} />
      <Home />
    </div>
  );
}
