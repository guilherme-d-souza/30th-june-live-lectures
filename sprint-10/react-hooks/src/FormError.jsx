import { useEffect } from "react";

function FormError(props) {
  // no dependency variables -> after the first render
  // VERY USEFUL TO API CALLS
  // componentDidMount

  // DOMLoadedContent
  useEffect(() => {
    console.log("This will be trigger only in the first render!");

    // cleanup -> after the component stops render
    // willUnmount
    return () => {
      console.log("The error is gone! Cleanup executed!");
    };
  }, []);

  // useEffect(() => {
  //   const cards = api.getInitialCards();
  //   setCards(cards);
  // }, []);

  return <span className="form_error">{props.description}</span>;
}

export default FormError;
