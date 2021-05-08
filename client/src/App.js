import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";


import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './Routes/ProtectedRoutes';
import KycForm from './components/KycForm';
import BankSetup from './components/BankSetup';
import ChangePassword from './components/ChangePassword';
import MutualFundDashboard from './components/MutualFundDashboard';


const authToken = localStorage.getItem('access_token');

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn:true
    }
  }

  componentDidMount() {
   
    if(authToken) {
      console.log('authenticated')
      this.setState({isLoggedIn:true})
    } else {
        console.log('not authenticated')
      this.setState({isLoggedIn:false})
    }
  }
  

  render() {
    
    return (
      <Router>
          <Route path="/" exact component={Login}/>
          <ProtectedRoute path="/dashboard" component={Dashboard} authState = {this.state.isLoggedIn}/>
          <ProtectedRoute path="/kyc-form" component={KycForm} authState = {this.state.isLoggedIn}/>
          <ProtectedRoute path="/bank-setup" component={BankSetup} authState = {this.state.isLoggedIn}/>
          <ProtectedRoute path="/change-password" component={ChangePassword} authState = {this.state.isLoggedIn}/>
          <ProtectedRoute path="/mutual-fund-plans" component={MutualFundDashboard} authState = {this.state.isLoggedIn}/>

      </Router>
    )
   
    
  }

}

export default App;
