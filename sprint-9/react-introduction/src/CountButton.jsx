import { useState } from "react";

// import { Component } from 'react';

// class Greeting extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

function CountButton() {
  // STATE

  // DESTRUCTURING
  // const arrayState = useState(0);
  // const count = arrayState[0];
  // const setCount = arrayState[1];

  // FUNCTION
  // useState(initialValue);
  // array
  //  0 -> value
  //  1 -> function -> SPECIAL FUNCTION -> triggers the RENDERRRRRRR

  // STANDARD
  // [variable, setVariable]
  let [count, setCount] = useState(0);

  function onClickButton() {
    // count++; // does not trigger the render
    setCount(count + 1);
  }

  // THE RENDER
  return <button onClick={onClickButton}>count is {count}</button>;
}

export default CountButton;
