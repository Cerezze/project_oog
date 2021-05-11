import React from 'react';
import './Body.css';
import TabBar from '../tabBar/tabBar';
import ReviewBody from '../reviewBody/reviewBody';
import SortTab from '../../Designs_and_Flow/basic_designs/open_Sort_Tab.png';

const Body = (props) =>(
    <div className="Body">
        <div className = "flexBody">
            <div className="bodyLeftPanel">
                <div className = "sortPanel">
                    <h3 className = "sortBy">Sort By</h3>
                    <ul className = "sortByList">
                        <li>
                            Genre
                        </li>
                        <li>
                            Time Posted
                        </li>
                        <li>
                            Popularity
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bodyMiddlePanel">
                <h1>REVIEWS</h1>
                <div className = "reviewCont">
                    <ReviewBody/>
                </div>
            </div>
            <div className="bodyRightPanel">
            </div>
        </div>
        
        <div className = "bodyBottomPanel">

        </div>
    </div>
);

export default Body;