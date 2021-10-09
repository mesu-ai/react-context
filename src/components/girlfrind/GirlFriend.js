import React, { useContext } from 'react';
import { ContextRing } from '../grandfather/GrandFather';

const GirlFriend = () => {
    const [ornaments]= useContext(ContextRing)


    return (
        <div>
            <h3>GirlFriend</h3>
            <p>{ornaments}</p>
            
        </div>
    );
};

export default GirlFriend;