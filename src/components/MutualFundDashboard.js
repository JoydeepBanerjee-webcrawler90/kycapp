import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import {Redirect,withRouter} from 'react-router-dom';

class MutualFundDashboard extends Component {

    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper p-2">
                  <p>Mutual Fund Dashboard</p>
            </div>
            </div>
       )
    }
}

export default withRouter(MutualFundDashboard);