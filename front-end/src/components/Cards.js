import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these discounts.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://picsum.photos/1080"
              text="Rent this amazing car for cheap"
              label="Sports car"
              path="/renting"
            />
            <CardItem
              src="https://picsum.photos/1080"
              text="Rent this beutiful car today"
              label="Family car"
              path="/renting"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://picsum.photos/1080"
              text="Rent this amazing car for cheap"
              label="Sports car"
              path="/renting"
            />
            <CardItem
              src="https://picsum.photos/1080"
              text="Rent this beutiful car today"
              label="Family car"
              path="/renting"
            />
            <CardItem
              src="https://picsum.photos/1080"
              text="Rent this beutiful car today"
              label="Family car"
              path="/renting"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
