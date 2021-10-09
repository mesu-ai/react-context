import React, { useContext } from 'react';
import { ContextRing } from '../grandfather/GrandFather';

const Aunty = () => {
   const [ornaments,neclase]= useContext(ContextRing);
    return (
        <div>
            <h3>Aunty</h3>
            <p>{neclase}</p>
            
        </div>
    );
};

export default Aunty;