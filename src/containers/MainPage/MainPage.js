import React, {Component} from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

class MainPage extends Component {

    render(){
        return(
            <div className="MAINPAGE">
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default MainPage;