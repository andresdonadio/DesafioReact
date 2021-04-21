import "bootstrap/dist/css/bootstrap.min.css";
import { usesState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";
import { useState } from "react";

function App() {
  const [seccion, setSeccion] = useState("Cards");
  return (
    <div>
      <div>
        <Navbar setSeccion={setSeccion} />
      </div>
      {seccion === "Cards" && (
        <div>
          <Cards />
        </div>
      )}
      {seccion === "Carrusel" && (
        <div className="container">
          <Carrusel />
        </div>
      )}
    </div>
  );
}

export default App;
