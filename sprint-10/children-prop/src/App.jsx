import "./App.css";
import Button from "@mui/material/Button";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

// CHILDREN PROP
// WE USE THAT WHEN THE STRUCTURE
// CHANGES DEPENDING ON THE CONTEXT
function App() {
  return (
    <>
      <Button variant="outlined" endIcon={<ShoppingCartRounded />}>
        <div>
          <section>
            <article>
              <span>HEllo!</span>
            </article>
          </section>
        </div>
      </Button>
    </>
  );
}

export default App;
