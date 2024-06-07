import React from 'react';
import list from '../dProducts';
import Cards from './Cards';

export default function({handleClick}){
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

