import React from "react";
import { cardsData } from "../../../data/data";
import Card from "./Card.jsx";
import "./cards.css";

const Cards = () => {
  // return the card(s) component by mapping data from exported card array
  return (
    <div className='Cards'>
      {" "}
      {cardsData.map((card, id) => {
        return (
          <div className='parentContainer'>
            {" "}
            <Card
              key={id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />{" "}
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Cards;
