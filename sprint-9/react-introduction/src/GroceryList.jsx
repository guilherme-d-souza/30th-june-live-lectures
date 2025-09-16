function GroceryList(props) {
  return (
    <>
      <h2>{props.buyer}</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={`${index}-${item.name}`}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GroceryList;
