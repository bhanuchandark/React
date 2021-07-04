import React from 'react';
import './NameCard.css';

//functional component
const url = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({suggestedName}) =>{
    return (
        <a className="name-link" href = {`${url}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
        
    );
};

export default NameCard;