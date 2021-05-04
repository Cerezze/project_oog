import React from 'react';
import './SignIn.css';
import Accountlog from '../../Designs_and_Flow/basic_designs/account.png'

const SignIn = (props) =>(
    <div className="signIn">
        {/* may need to put both the text and logo in same div*/}
        <div className = "leftAlign">
        </div>
        <div className = "signInCont">
                <img className = "accLog" src = {Accountlog}  height = {"50px"}/>
                <span className = "signInText">
                    <strong>Sign in</strong>
                </span>
        </div>
    </div>
);

export default SignIn;