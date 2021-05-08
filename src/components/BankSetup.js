import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import {Redirect,withRouter} from 'react-router-dom';

class BankSetup extends Component {

    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper p-2">
                
            </div>
            </div>
       )
    }
}

export default withRouter(BankSetup);