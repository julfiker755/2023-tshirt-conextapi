import React from 'react';
import Cousin from './Cousin';
import Cousinn from './Cousinn';

const Anty = () => {
    return (
        <div>
           <h1>Anty</h1>
            <h2>House 1</h2> 
            <div className='grid grid-cols-2  border-[3px] m-2 border-[#16798a] rounded-md'>
                <div className='border-[3px] m-2 border-[#190b72] rounded-md'><Cousin></Cousin></div>
                <div className='border-[3px] m-2 border-[#190b72] rounded-md'><Cousinn></Cousinn></div>
            </div>
        </div>
    );
};

export default Anty;