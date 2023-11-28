import React from 'react'
import "../Style.css"
const Products = (props) => {
  return (
    <div>
      <img src={props.image} alt="#" />
      <h1>{props.heading}</h1>
      <h2>{props.price}</h2>
      <button>see details</button>
    </div>
  )
}

export default Products
