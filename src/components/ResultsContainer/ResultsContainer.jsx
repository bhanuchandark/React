import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({ suggestedNames }) =>{
    const suggestedNameJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName ={suggestedName}/>
    })
    return (
        <div className= "results-container">
            {/* <h4>{suggestedNames.length > 0 && suggestedNames[0]}</h4> */}
            {/* if first expression is true then it will executes second expression in js */}
            {/* {suggestedNameJSX} */}
            <p>{suggestedNameJSX}</p>
        </div>
    )
}


export default ResultsContainer;