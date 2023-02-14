import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirtcard from './Tshirtcard';

const Tshirt = () => {
    const tshirtdata=useLoaderData()
    const [cart,setcart]=useState([])
    const [searchtext,setsearchtext]=useState('')
    const [searchdata,setsearchdata]=useState([])
   //  Search Your data start
      useEffect(()=>{
         const searchAll=tshirtdata.filter(ts=>ts.name.toLowerCase().includes(searchtext.toLowerCase()))
         setsearchdata(searchAll)
      },[searchtext])
   //1.1 Your data cart a add
    const addcart=(tdata)=>{
    /*
    Node:1.1,1.2 aksathe two ta exsis kaj korbe nah.jekono akta exsis use korte hobe.[ai project a demo save ache]
    */
     const exsis=cart.find(ts=>ts._id===tdata._id)
     if(exsis){
        window.alert("You already product added")
     }else{
        const newcart=[...cart,tdata]
        setcart(newcart)
     }
    }
   // 1.2 checkitem exsis color change
   const checkitemexsis = (id) => {
      const find = cart.filter(ets => ets._id === id)
      return !!find.length
   }

    //Your data delete 
    const Adddelete=(id)=>{
       const delitem=cart.filter(ts=>ts._id !== id)
       setcart(delitem)
    }
 
    return (
      <div className='container mx-auto py-2'>
         <div className='w-full text-center'>
            <input type="text" onChange={(e)=>setsearchtext(e.target.value)} placeholder="Search here" className="input input-bordered input-secondary w-full max-w-xs" />
          </div>
        <div className='flex py-3'>
           <div className='w-[1200px] flex gap-5 flex-wrap'>
           {searchdata.map(shirt=><Tshirtcard key={shirt._id} exsis={checkitemexsis} handlecart={()=>addcart(shirt)} shirt={shirt}></Tshirtcard>)}
           </div>
           <div>
            <h1 className='text-[40px] text-white text-bold'>Order Overview</h1>
            <Cart cart={cart} handledelete={Adddelete}></Cart>
           </div>
        </div>
      </div>
    );
};

export default Tshirt;