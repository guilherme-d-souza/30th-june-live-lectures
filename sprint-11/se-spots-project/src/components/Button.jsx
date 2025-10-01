import { useState } from "react";
import "../blocks/button.css";

export default function Button({ onClick = () => {} }) {
  // const [position, setPosition] = useState({ left: 0, top: 0 });

  // function handleRipple(left, top) {
  // setPosition({ left, top });
  // }

  // function handleClick(event) {
  //   event.preventDefault();
  //   console.log(event);
  //   handleRipple(event.clientX, event.clientY);
  //   onClick();
  // }

  return (
    <button className="button">
      <span
        className="button-ripple"
        // style={{ position: "fixed", top: position.top, left: position.left }}
      ></span>
      Button
    </button>
  );
}
