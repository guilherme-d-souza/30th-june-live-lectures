import "normalize.css";
import "./App.css";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <>
      <Header position="Software Engineer" name="Guilherme de Souza" />
      <main>
        <ul className="content">
          <Card
            imageSrc="https://plus.unsplash.com/premium_photo-1661868926397-0083f0503c07?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Soccer player with a ball"
            title="Soccer"
            description="I love soccer since I was a kid, was my favorite hobby!"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1606733847546-db8546099013?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Boardgame Catan being played"
            title="Boardgame"
            description="I play boardgame every time that I can!"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1606733847546-db8546099013?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Boardgame Catan being played"
            title="Boardgame"
            description="I play boardgame every time that I can!"
          />
          <Card
            imageSrc="https://images.unsplash.com/photo-1606733847546-db8546099013?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Boardgame Catan being played"
            title="Boardgame"
            description="I play boardgame every time that I can!"
          />
        </ul>
      </main>
      <footer>© Guilherme de Souza 2025</footer>
    </>
  );
}

export default App;
