import React from "react";
import css from "./index.module.css";

function Card({ data }) {
  console.log(JSON.stringify(data));
  return (
    <div className={css.cardContainer}>
      <div>
        <img src={data.image} alt={data.title} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.description.slice(0, 50) + "..."}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Card;
