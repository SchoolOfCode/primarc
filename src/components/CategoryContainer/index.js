import React, { useEffect, useState } from "react";
import Card from "../card";

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

    console.log(items);
  }, []);

  return (
    <div>
      <h2>{category}</h2>
      {items ? <Card data={items[0]} /> : `Loading Data...`}
    </div>
  );
}

export default CategoryContainer;
