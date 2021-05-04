import React from 'react';
import './Body.css';
import TabBar from '../tabBar/tabBar';
import ReviewBody from '../reviewBody/reviewBody';

const Body = (props) =>(
    <div className="Body">
        <div className = "flexBody">
            <div className="bodyLeftPanel">
            </div>
            <div className="bodyMiddlePanel">
                <TabBar/>
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