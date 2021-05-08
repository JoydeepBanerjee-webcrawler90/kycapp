import React, {Component} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {

    
    render(){
        return (
            <div>
            <Header/>
            <SideBar/>
            <Content/>
            </div>
       )
    }
}

export default withRouter(Dashboard);