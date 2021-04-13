import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import SignIn from '../SignIn/SignIn';

const Header = (props) =>(
    <div className="HEADER">
        <div className="headerLeftPanel">
                
        </div>
        <div className="headerRightPanel">
            <SignIn/>
            <Search/>
        </div>
    </div>
);

export default Header;