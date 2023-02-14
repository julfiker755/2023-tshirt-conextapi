import React from 'react';
import Brother from './Brother';
import Myself from './Myself';
import Sister from './Sister';

const Father = () => {
    return (
        <div>
            <h1>Father</h1>
            <h2>House 1</h2>
            <div className='grid grid-cols-3 border-[3px] m-2 border-[#16798a] rounded-md'>
                <div className='border-[3px] m-2 border-[#190b72] rounded-md'><Myself></Myself></div>
                <div className='border-[3px] m-2 border-[#190b72] rounded-md'><Brother></Brother></div>
                <div className='border-[3px] m-2 border-[#190b72] rounded-md'><Sister></Sister></div>
            </div>
        </div>
    );
};

export default Father;