import React from 'react';
import './reviewBody.css';
import TabBar from "../tabBar/tabBar";
import Comments from '../../Designs_and_Flow/basic_designs/numberOfcomments.png';

let temp = "The Legend of Zelda: Breath of The Wild";
let commentNum = 232;

const reviewBody = (props) =>(
    
    <div className="reviewBody">
        <div className = "leftReviewPanel">

        </div>
        <div className = "rightReviewPanel">
            <div className = "reviewStatus">
                <div className = "dateTime">
                    3/16/2021 2:35 PM
                </div>
                <div className = "Icon">
                    <div className = "commentIcon" >
                        <img src = {Comments} height = {"40px"}/>
                    </div>
                    <div className = "numOfComments">
                        {commentNum}
                    </div>
                </div>
            </div>
            <div className = "leftReviewPanelmob">

            </div>
            <TabBar title = {temp}/>
        </div>
    </div>
);

export default reviewBody;