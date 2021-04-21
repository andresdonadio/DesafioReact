import Card from "./Card";
import imagen1 from "../img/1.jpg";
import imagen2 from "../img/2.jpg";
import imagen3 from "../img/3.jpg";

const peliculas = [
  {
    titulo: "El patrón",
    descripcion:
      "Un hombre del campo llega a Buenos Aires y comienza a trabajar en una carnicería. El propietario de la misma va, poco a poco, convirtiendo a su nuevo empleado en un esclavo.",
    puntaje: " 9/10",
    imagen: imagen1,
  },

  {
    titulo: "La odisea de los giles",
    descripcion:
      "Un grupo de vecinos se organiza para llevar a cabo un provecto que ayude a paliar la crisis. Sin embargo en medio del corralito son víctimas de un abogado y un banquero. Se organizarán para recuperar sus ahorros.",
    puntaje: " 9/10",
    imagen: imagen2,
  },

  {
    titulo: "El ciudadano ilustre",
    descripcion:
      "El señor Daniel Mantovani, premio Nobel en literatura, acepta una invitación para visitar su ciudad natal en Argentina. Mantovani, quien reside en Barcelona, ha criticado con dureza a su tierra natal desde el extranjero.",
    puntaje: " 8.9/10",
    imagen: imagen3,
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="row">
        {peliculas.map((pelicula) => (
          <div className="col-md-4">
            <Card
              titulo={pelicula.titulo}
              imagen={pelicula.imagen}
              descripcion={pelicula.descripcion}
              puntaje={pelicula.puntaje}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
// export peliculas
