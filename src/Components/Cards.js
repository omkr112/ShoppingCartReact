import React from 'react';

export default function Cards({item, handleClick}){
    const {title, price, img} = item;
  return (
    <div className="cards">
        <div className="img-card">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}
