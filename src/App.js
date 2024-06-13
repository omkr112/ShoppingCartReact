import React , {useState} from 'react';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Website from './Components/Website';
import './App.css';

export default function App(){
	const [display, setDisplay] = useState(true);
	const [cart , setCart] = useState([]);
	const [alert, setAlert] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setAlert(true);
			setTimeout(()=>{
				setAlert(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let plc = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				plc = index;
		});
		const tempArr = cart;
		tempArr[plc].amount += d;
		
		if (tempArr[plc].amount === 0)
			tempArr[plc].amount = 1;
		setCart([...tempArr])
	}

  return (
	<>
		<Navbar size={cart.length} setDisplay={setDisplay} />
		{
			display ? <Website handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			alert && <div className='alert'>Item is already added </div>
		}
	</>
  )
}

