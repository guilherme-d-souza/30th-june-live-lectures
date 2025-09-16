import "./App.css";
import CountButton from "./CountButton";
import GroceryList from "./GroceryList";
import Input from "./Input";

function App() {
  return (
    <>
      <CountButton />
      <CountButton />
      <Input />
      <GroceryList
        buyer="Guilherme"
        items={[
          { price: 1, name: "Rice" },
          { price: 1, name: "Beans" },
          { price: 2, name: "Beans" },
        ]}
      />
    </>
  );
}

export default App;
