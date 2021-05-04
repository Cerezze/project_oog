import React from 'react';
import './Search.css';
import SearchLog from '../../Designs_and_Flow/basic_designs/Search.png';

const Search = (props) =>(
    <div className="search">
        <img className = "SearchLog" src = {SearchLog} height = {"45px"}/>
        <input placeholder="   SEARCH"></input>
    </div>
);

export default Search;