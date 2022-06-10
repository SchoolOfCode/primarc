import React, { useEffect } from 'react'

function CategoryContainer({category}) {
useEffect(()=>{
    async function fetchData (){
    const response = await fetch(`https://fakestoreapi.com/products/category/${category.toLowerCase()}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
    } fetchData()
}, [])


  return (
    <div>
    <h2>{category}</h2>
    </div>
  )
}

export default CategoryContainer