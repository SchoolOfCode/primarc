import React from "react";
import css from "./index.module.css";
import heart from "../../Assets/heart.svg";
import { useState } from "react";

function Card({ data }) {
  const [favourite, setFavourite] = useState("");

  function favouriteClick() {}

  return (
    <div className={css.cardContainer}>
      <div>
        <img alt={data.title} src={data.image} className={css.productImage} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.description.slice(0, 50) + "..."}</p>
      <p>{data.price}</p>
      <img
        src={heart}
        className={css.favourite}
        alt="Favourite button"
        onClick={favouriteClick}
      ></img>
    </div>
  );
}

export default Card;
