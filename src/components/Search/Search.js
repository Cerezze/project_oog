import React from 'react';
import './Search.css';
import SearchLog from '../../Designs_and_Flow/basic_designs/Search.png';
import {useState, useEffect} from 'react';

const Search = (props) =>{
    
    return(<div className="search">
        <img className = "SearchLog" src = {SearchLog} height = {"45px"}/>
        <input 
            type = "text" 
            placeholder="   SEARCH..."
            value={props.term}
            onChange={props.Change}/>

        {props.term ? <ul className = "searchList">
            { props.results.map(item => (
            <li>{item}</li>
            ))}
        </ul> : null}
    </div>);
};

export default Search;