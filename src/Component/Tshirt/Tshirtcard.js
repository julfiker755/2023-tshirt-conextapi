import React from 'react';
import Button from '../Button/Button'
const Tshirtcard = ({shirt,handlecart,exsis}) => {
    const {_id,name,picture,price}=shirt
    return (
        <div className='w-[280px] h-[410px] border border-[red] rounded-md p-1'>
           <img className='w-full h-[300px]' src={picture}/>
           <div>
            <p>Name:{name}</p><p>Price:{price}</p>
            {/* exsis color button */}
             {exsis(_id) ? <Button mycolor='w-full py-3 rounded-md bg-[purple]' title='Add to cart'></Button>
             :<Button handleclick={handlecart} mycolor='w-full py-3 rounded-md' title='Add to cart'></Button> }
            
           </div>
        </div>
    );
};

export default Tshirtcard;