import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure class="cards__item__img-wrap">
            <img src="/" alt="Car Image" className="cards__item__img" />
          </figure>
          <div class="cards__item__desc">
            <h5 class="cards__item__text"></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
