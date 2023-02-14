import React, { useContext } from 'react';
import { Ringcontext } from '../../Granfather';

const Spical = () => {
    const ring=useContext(Ringcontext)
    return (
        <div>
            <h1>Spical</h1>
            <h2>Git:{ring}</h2>
        </div>
    );
};

export default Spical;