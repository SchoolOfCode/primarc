import React, { useEffect, useState } from "react";
import Card from "../card";
import css from "./index.module.css";

function CategoryContainer({ category }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category.toLowerCase()}`
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className={css.categoryContainer}>
      <h2>{category}</h2>
      <div className={css.cardsContainer}>
        {items
          ? items.map((item, index) => {
              return <Card data={item} key={index} />;
            })
          : `Loading Data...`}
      </div>
    </div>
  );
}

export default CategoryContainer;
