import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#147d89] text-white py-[10px] sticky top-0'>
            <ul className='flex justify-center space-x-3'>
                <li><Link to="/">Tshirt shop</Link></li>
                <li><Link to="/granfather">Grandfather</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;