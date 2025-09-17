import "./Image.css";

function Image(props) {
  return <img className="image__logo" src={props.src} alt={props.alt} />;
}

export default Image;
