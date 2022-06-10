import React from 'react'

function Card({image, title, description, price}) {

  return (
    <div>
    <img src={image} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{price}</p>
    </div>
  )
}

export default Card