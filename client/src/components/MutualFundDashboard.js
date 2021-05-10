import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import {withRouter} from 'react-router-dom';
import UnderConstruction from './UnderConstruction';

class MutualFundDashboard extends Component {

    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <UnderConstruction/>

            </div>
       )
    }
}

export default withRouter(MutualFundDashboard);