// SideBar.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const logoimage = {
    "opacity":0.8
}
export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }
    
  }

  componentDidMount() {
    this.setState({
      userInfo:JSON.parse(localStorage.getItem('userinfo'))
    })
  }
    
    render(){
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/dashboard" className="brand-link">
              <img src="dist/img/favicon.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={logoimage}/>
              <span className="brand-text font-weight-light">Mutual Fund App</span>
            </Link>
        
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img src="dist/img/default-150x150.png" className="img-circle elevation-2" alt="User"/>
                </div>
                <div className="info">
                  <Link to="/dashboard" className="d-block">{(this.state.userInfo !== null && this.state.userInfo.username!==undefined) ? this.state.userInfo.username : 'Demo User'}</Link>
                </div>
              </div>
        
              {/* SidebarSearch Form */}
            
        
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
                       with font-awesome or any other icon font library */}
                  

                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                      <i className="nav-icon fas fa-home"></i>
                    
                        <p>Dashboard</p>
                    
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="kyc-form" className="nav-link">
                      <i className="nav-icon fas fa-question-circle"></i>
                      
                        <p>Kyc Verification</p>
                      
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="bank-setup" className="nav-link">
                      <i className="nav-icon fas fa-university"></i>
                      
                        <p>Bank Details</p>
                     
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/change-password" className="nav-link">
                      <i className="nav-icon fas fa-key"></i>
                      
                        <p>Change Password</p>
                      </Link>
                   
                  </li>

                  <li className="nav-item">
                    <Link to="/mutual-fund-plans" className="nav-link">
                      <i className="nav-icon fas fa-chart-area"></i>
                      
                        <p>Mutual Fund Plans</p>
                      
                    </Link>
                  </li>

                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>   
        )
    }
}