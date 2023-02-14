import React from 'react';
import Button from '../Button/Button';

const Cart = ({cart,handledelete}) => {
    let message;
    if(cart.length===0){
        message='Your no item select';
    }
    return (
        <div>
            <h1 className='text-[25px] text-white'>Order:{cart.length}</h1>
            <hr></hr>
            {cart.map(ts=><h1 key={ts._id} className='text-[#236678] text-[17px] my-4'>{ts.name}
             <Button handleclick={()=>handledelete(ts._id)} mycolor='w-[100px] ml-3 rounded-md bg-[red]' title='delete'></Button>
            </h1>)}
            <h1>{message}</h1>
            {/* {cart.length === 0 ? <h1>Select your item</h1>:null} */}
            {/* {cart.length ===0 && <h1>Select Your item &&</h1>} */}
            {/* {cart.length ===3 || <p>3 ta item nah</p>} */}
        </div>
    );
};

export default Cart;
// *************condisonal Rendering**********
// use element varible then if else set value
// tarnary operation condition? true:false
// && operator(if condition true i want to display)
// || operator(if conditon false i want to display)