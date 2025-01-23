import React, { useState } from 'react';

export function ProductsList () {
    const [status, setStatus] = useState([]);
    const url = "https://fakestoreapi.com/products?sort=desc";
    

    fetch(url).then(res=>res.json()).then(status=> setStatus(status))
    
    return (
        <div>
            {status.map(item => (
                <div className='border-solid border items-center text-center justify-center m-7 rounded-2xl'>
                    <div className='font-bold text-2xl'>
                        {item.title}
                    </div>
                    {item.description}
                    <div className='flex items-center text-center justify-center font-bold text-2xl'>
                        <img src={item.image}></img>
                    </div>
                    {item.price}
                </div>
            ))}
        </div>
    );
}