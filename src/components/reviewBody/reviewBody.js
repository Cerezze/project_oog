import React from 'react';
import './reviewBody.css';
import TabBar from "../tabBar/tabBar";

const reviewBody = (props) =>(
    <div className="reviewBody">
        <div className = "leftReviewPanel">

        </div>
        <div className = "rightReviewPanel">
            <div className = "reviewStatus">

            </div>
            <div className = "leftReviewPanelmob">

            </div>
            <TabBar/>
        </div>
    </div>
);

export default reviewBody;