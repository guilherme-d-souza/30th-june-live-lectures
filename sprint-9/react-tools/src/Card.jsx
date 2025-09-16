import "./Card.css";

function Card(props) {
  return (
    <li className="card">
      <img className="card__image" src={props.imageSrc} alt={props.imageAlt} />
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </li>
  );
}

export default Card;
