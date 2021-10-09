import React, { createContext } from 'react';
import Aunty from '../aunty/Aunty';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';

export const ContextRing= createContext('ring');

const ornaments= 'diamond ring';
const neclase='sita har';
const GrandFather = () => {
    return (
        
        
        <div>
            <h3>GrandFather</h3>
            <ContextRing.Provider value={[ornaments,neclase]} >
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>
            </ContextRing.Provider>
            
        </div>
            
        
    );
};

export default GrandFather;