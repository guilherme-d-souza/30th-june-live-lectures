function Input() {
  function onChangeInputValue() {
    console.log("This property changed the value!");
  }

  return <input type="text" onChange={onChangeInputValue} />;
}

export default Input;
