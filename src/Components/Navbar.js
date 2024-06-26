import React from 'react';

export default function Navbar({size, setDisplay}){
  return (
    <nav>
        <div className="nav_box">
            <span className="my_cart" onClick={()=>setDisplay(true)}>
                Shopping Cart
            </span>
            <div className="cart" onClick={()=>setDisplay(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

