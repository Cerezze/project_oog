import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import SignIn from '../SignIn/SignIn';
import HeaderBackgroundImage from '../../Designs_and_Flow/basic_designs/header_background.png';
import Logo from '../../Designs_and_Flow/basic_designs/Logo.png';

const Header = (props) =>(
    <div className="HEADER">
        <div className="headerLeftPanel">
            <div className = "leftAlignHeader">
            </div>
            <div className = "Logo">
                <img src = {Logo} height = {"90px"}/>
            </div>
            <div className = "HeaderText">
                    <strong>Software and Tech Reviews</strong>
                </div>
        </div>
        <div className="headerRightPanel">
            <SignIn/>
            <Search reviews = {props.reviews}
                    term = {props.term}
                    results = {props.results}
                    Change = {props.Change}/>
        </div>
    </div>
);

export default Header;