import React from 'react';
import './ButtonStyles.css';

// Funktionell komponent Button tar emot två props:
// onClick (en funktion för att hantera klickhändelser) och text (texten att visa på knappen)
const Button = ({ onClick, text}) => { 
    
    return(
        <div className='button-container'>
            {/* Rendera en knapp med angiven text och onClick-hantering */}
        <button onClick={onClick}>
            {text}
            </button>
        </div>
    );
};

export default Button;