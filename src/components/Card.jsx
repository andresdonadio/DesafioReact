import "./Card.css";

const Card = (props) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={props.imagen} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{props.titulo}</h4>
        <p className="card-text text-secondary">{props.descripcion}</p>
        <div className="text-info">Puntaje:{props.puntaje}</div>
      </div>
    </div>
  );
};

export default Card;
