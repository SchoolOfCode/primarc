import React, { useEffect, useState } from 'react'
import Card from '../card'

function CategoryContainer({category}) {

   const [items, setItems] = useState(null)
      
useEffect(()=>{
    async function fetchData (){
    const response = await fetch(`https://fakestoreapi.com/products/category/${category.toLowerCase()}`)
    const data = await response.json()
            // // .then(res=>res.json())
            // .then(json=>console.log(json))
            setItems(data)
    } 
    fetchData()
 
    console.log(items)
}, [items])


  return (
    <div>
    <h2>{category}</h2>
   {items? <Card data={items[0]}/> : `no results`}
    </div>
  )  
}

export default CategoryContainer