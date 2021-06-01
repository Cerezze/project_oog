import React from 'react';
import './reviewBody.css';
import TabBar from "../tabBar/tabBar";
import Comments from '../../Designs_and_Flow/basic_designs/numberOfcomments.png';

//let temp = "The Legend of Zelda: Breath of The Wild";
//let commentNum = 232;

const reviewBody = (props) =>(
    <div className="reviewBody">
        <div className = "leftReviewPanel">
            <img className = "dynamicImage" src = {props.URLimage} alt="IMAGE NOT HERE" />
        </div>
        <div className = "rightReviewPanel">
            <div className = "reviewStatus">
                <div className = "dateTime">
                    {props.dateAndTime}
                </div>
                <div className = "Icon">
                    <div className = "commentIcon" >
                        <img src = {Comments} height = {"40px"}/>
                    </div>
                    <div className = "numOfComments">
                        {props.commentNum}
                    </div>
                </div>
            </div>
            <div className = "leftReviewPanelmob">

            </div>
            <TabBar title = {props.title}/>
        </div>
    </div>
);

export default reviewBody;