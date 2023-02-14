import React, { createContext } from 'react';
import Anty from './Anty/Anty';
import Father from './Father/Father';
import Uncle from './Uncle/Uncle';

export const Ringcontext=createContext('Ring');
const Granfather = () => {
    return (
       <Ringcontext.Provider value='Daimon ring boss'>
         <div className='container mx-auto text-center border-[7px] border-[#04518c] rounded-md text-white'>
            <h1 className='text-[30px]'>Granfather</h1>
            <button></button>
             <div className='border-[2px] m-2 border-[#04518c] rounded-md grid grid-cols-3'>
             <div className='border-[3px] m-2 border-[#16798a] rounded-md'><Father></Father></div>
             <div className='border-[3px] m-2 border-[#16798a] rounded-md'><Anty></Anty></div>
             <div className='border-[3px] m-2 border-[#16798a] rounded-md'><Uncle></Uncle></div>  
             </div>
        </div>
       </Ringcontext.Provider>
    );
};

export default Granfather;