import React from 'react';
import './Body.css';
import TabBar from '../tabBar/tabBar';
import ReviewBody from '../reviewBody/reviewBody';

const Body = (props) =>(
    <div className="Body">
        <div className="bodyLeftPanel">
        </div>
        <div className="bodyMiddlePanel">
            <TabBar/>
            <ReviewBody/>
        </div>
        <div className="bodyRightPanel">
        </div>
    </div>
);

export default Body;