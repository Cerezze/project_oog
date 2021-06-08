import React from 'react';
import './Body.css';
import TabBar from '../tabBar/tabBar';
import ReviewBody from '../reviewBody/reviewBody';
import SortTab from '../../Designs_and_Flow/basic_designs/open_Sort_Tab.png';

import {useState, useEffect} from 'react';

const Body = (props) =>{
    const [isVisible, setIsVisible] = useState(-125);

    if(props.loading){
        return <h3>LOADING...</h3>
    }

    let arr1 = [];

    for(let i = 0; i < props.results.length; i++){
        for(let j = 0; j < props.reviews.length; j++){
            if(props.results[i] === props.reviews[j].Title){
                arr1.push(props.reviews[j]);
            }
        }
    }

    const handleClickVis = event => {
        console.log("clicked");
        if(isVisible == 0)
            setIsVisible(-125);
        else
            setIsVisible(0);
    };

    return(
    <div className="Body">
        <div className = "flexBody">
            <div className="bodyLeftPanel">
                <div className = "sortPanel" 
                    style = {{marginLeft: isVisible}}>
                    <h3 className = "sortBy">Sort By</h3>
                    <ul className = "sortByList">
                        <li onClick = {() => props.Sort(1)}>
                            Title
                        </li>
                        <li onClick = {() => props.Sort(2)}>
                            Time Posted
                        </li>
                        <li onClick = {() => props.Sort(3)}>
                            Popularity
                        </li>
                    </ul>
                    <div className = "clickDiv" 
                          onClick = {handleClickVis}>
                    </div>
                </div>
            </div>
            <div className="bodyMiddlePanel">
                <h1 className = "tabTitle">REVIEWS</h1>
                <div className = "reviewCont">
                    {arr1.length === 0 ? props.reviews.map(i =>(
                            <ReviewBody title = {i.Title} 
                                        commentNum = {i.commentNum} 
                                        URLimage = {i.Image}
                                        dateAndTime = {i.Date}/>
                    )) : props.reviews.filter(word => {
                        return arr1.includes(word);
                    }).map(i => {
                        return(<ReviewBody title = {i.Title} 
                                           commentNum = {i.commentNum} 
                                           URLimage = {i.Image}
                                           dateAndTime = {i.Date}/>)})}
                </div>
            </div>
            <div className="bodyRightPanel">
            </div>
        </div>
        
        <div className = "bodyBottomPanel">

        </div>
    </div>
)};

export default Body;