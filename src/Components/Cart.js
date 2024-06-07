import React,{useState} from 'react';
import { useEffect } from 'react';

export default function Cart({cart, setCart, handleChange}){
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let amt = 0;
        cart.map((item)=>(
            amt += item.amount * item.price
        ))
        setPrice(amt);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <div>
        {
         cart?.map((item)=>(
                <div className="cart1" key={item.id}>
                    <div className="cart2">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs = {price}</span>
        </div>
    </div>
  )
}

