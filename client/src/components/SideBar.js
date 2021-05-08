// SideBar.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const logoimage = {
    "opacity":0.8
}
export default class SideBar extends Component {
    
    render(){
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img src="dist/img/favicon.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={logoimage}/>
              <span className="brand-text font-weight-light">Mutual Fund App</span>
            </a>
        
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image"/>
                </div>
                <div className="info">
                  <a  className="d-block">Demo user</a>
                </div>
              </div>
        
              {/* SidebarSearch Form */}
            
        
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
                       with font-awesome or any other icon font library */}
                  

                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="nav-icon fas fa-home"></i>
                      <Link to="/dashboard">
                        <p>Dashboard</p>
                      </Link>
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="nav-icon fas fa-question-circle"></i>
                      <Link to="/kyc-form">
                        <p>Kyc Verification</p>
                      </Link>
                      
                    </a>
                  </li>

                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="nav-icon fas fa-university"></i>
                      <Link to="/bank-setup">
                        <p>Bank Details</p>
                      </Link>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="nav-icon fas fa-key"></i>
                      <Link to="/change-password">
                        <p>Change Password</p>
                      </Link>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="nav-icon fas fa-chart-area"></i>
                      <Link to="/mutual-fund-plans">
                        <p>Mutual Fund Plans</p>
                      </Link>
                    </a>
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