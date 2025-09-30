import { useEffect, useState } from "react";
import "../blocks/cards.css";
import Card from "./Card";
import { getCards } from "../services/TripleTenAPI";
import Image from "./Image";

export default function Cards() {
  const [cards, setCards] = useState([]);

  async function fetchCards() {
    const cards = await getCards();
    setCards(cards);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((cardItem) => (
          <Card key={cardItem._id} cardItem={cardItem} Image={Image} />
        ))}
      </ul>
    </section>
  );
}
