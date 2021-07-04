import React from 'react';
import './SearchBox.css';

// Functional Component
const SearchBox = ({onInputChange}) =>{
    return(
        <div className = "search-container">
            <input 
                onChange={(event) => onInputChange(event.target.value)} 
                placeholder="Type Keyword" 
                className="search-box" type="text">
            </input>
        </div>
    )

}

export default SearchBox;