import React from "react";
import { useEffect, useState } from "react";
import Card from "./components/Card";
// import "./CardList.scss";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cardsData));
  }, []);

  return (
    <div className="cardList">
      {cards.map((card) => (
        <Card
          key={card.id}
          imgURL={card.card_img}
          detail={card.detail}
          itemList={card.itemList}
        />
      ))}
    </div>
  );
}

export default CardList;
