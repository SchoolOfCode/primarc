import React from "react";

function Card({ data }) {
  console.log(JSON.stringify(data));
  return (
    <div>
      <img src={data.image} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Card;
