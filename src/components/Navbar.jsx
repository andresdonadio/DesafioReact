import { Nav } from "react-bootstrap";

function Navbar(props) {
  return (
    <div className="container py-5">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => props.setSeccion("Cards")}>
            Películas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => props.setSeccion("Carrusel")}>
            Carrusel
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Navbar;
