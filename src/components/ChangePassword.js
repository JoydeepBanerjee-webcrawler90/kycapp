import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import {withRouter} from 'react-router-dom';

class ChangePassword extends Component {

    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper p-2">
                  <p>Change Password Form</p>
            </div>
            </div>
       )
    }
}

export default withRouter(ChangePassword);