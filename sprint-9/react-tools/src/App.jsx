import "normalize.css";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import { cards } from "./utils/constants";

function App() {
  return (
    <>
      <Header position="Software Engineer" name="Guilherme de Souza" />
      <main>
        <ul className="content">
          {cards.map((card, index) => (
            <Card
              key={`${index}-${card.description}`}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </main>
      <footer>© Guilherme de Souza 2025</footer>
    </>
  );
}

export default App;
